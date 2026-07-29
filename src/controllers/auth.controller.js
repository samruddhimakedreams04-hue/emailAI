import { google } from 'googleapis';
import { createOAuth2Client, getAuthUrl } from '../config/google.js';
import User from '../models/User.js';
import {
  saveOAuthTokens,
  listAccounts,
  setActiveAccount,
  removeAccount,
  removeAllTokensForUser,
  getActiveAccount,
} from '../services/auth/token.service.js';
import {
  authenticate,
  optionalAuthenticate,
  signSessionToken,
  signOAuthState,
  verifyOAuthState,
} from '../middleware/auth.middleware.js';

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

function setAuthCookie(res, token) {
  res.cookie('token', token, COOKIE_OPTIONS);
}

function clearAuthCookie(res) {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function googleLogin(req, res, next) {
  try {
    const oauth2Client = createOAuth2Client();
    const state = signOAuthState(req.user?.id || null);
    const authUrl = getAuthUrl(oauth2Client, state);
    res.redirect(authUrl);
  } catch (error) {
    next(error);
  }
}

export async function googleCallback(req, res, next) {
  try {
    const { code, error, state } = req.query;

    if (error) {
      return res.status(400).json({ error: `Google OAuth error: ${error}` });
    }

    if (!code || !state) {
      return res.status(400).json({ error: 'Missing OAuth code or state' });
    }

    let statePayload;
    try {
      statePayload = verifyOAuthState(state);
    } catch {
      return res.status(400).json({ error: 'Invalid or expired OAuth state' });
    }

    const oauth2Client = createOAuth2Client();
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data: profile } = await oauth2.userinfo.get();

    if (!profile.email) {
      return res.status(400).json({ error: 'Unable to retrieve Google account email' });
    }

    let user;

    if (statePayload.userId) {
      user = await User.findById(statePayload.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found for account linking' });
      }
    } else {
      user =
        (await User.findOne({ googleId: profile.id })) ||
        (await User.findOne({ email: profile.email }));

      if (!user) {
        user = await User.create({
          email: profile.email,
          name: profile.name,
          picture: profile.picture,
          googleId: profile.id,
        });
      } else {
        user.name = profile.name || user.name;
        user.picture = profile.picture || user.picture;
        user.googleId = profile.id;
        await user.save();
      }
    }

    const oauthAccount = await saveOAuthTokens(user._id, profile.email, tokens, {
      setActive: true,
    });

    const sessionToken = signSessionToken(user._id.toString(), oauthAccount._id.toString());
    setAuthCookie(res, sessionToken);

    res.json({
      message: 'Gmail connected successfully',
      token: sessionToken,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
      activeAccount: {
        id: oauthAccount._id,
        email: oauthAccount.email,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function logout(req, res, next) {
  try {
    const activeAccount = await getActiveAccount(req.user.id);

    if (activeAccount?.accessToken) {
      try {
        const oauth2Client = createOAuth2Client();
        await oauth2Client.revokeToken(activeAccount.accessToken);
      } catch {
        // Token may already be invalid; continue logout
      }
    }

    await removeAllTokensForUser(req.user.id);
    clearAuthCookie(res);

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
}

export async function getAccounts(req, res, next) {
  try {
    const accounts = await listAccounts(req.user.id);
    res.json({ accounts });
  } catch (error) {
    next(error);
  }
}

export async function activateAccount(req, res, next) {
  try {
    const account = await setActiveAccount(req.user.id, req.params.id);
    const sessionToken = signSessionToken(req.user.id, account._id.toString());
    setAuthCookie(res, sessionToken);

    res.json({
      message: 'Active account updated',
      token: sessionToken,
      activeAccount: {
        id: account._id,
        email: account.email,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function disconnectAccount(req, res, next) {
  try {
    const result = await removeAccount(req.user.id, req.params.id);
    const activeAccount = await getActiveAccount(req.user.id);
    const sessionToken = signSessionToken(
      req.user.id,
      activeAccount?._id?.toString() || null
    );
    setAuthCookie(res, sessionToken);

    res.json({
      ...result,
      token: sessionToken,
      activeAccount: activeAccount
        ? { id: activeAccount._id, email: activeAccount.email }
        : null,
    });
  } catch (error) {
    next(error);
  }
}

export async function getMe(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select('email name picture createdAt');
    const accounts = await listAccounts(req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      user,
      accounts,
      activeAccountId: req.user.activeAccountId,
    });
  } catch (error) {
    next(error);
  }
}

export { authenticate, optionalAuthenticate };
