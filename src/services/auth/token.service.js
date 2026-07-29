import { google } from 'googleapis';
import { createOAuth2Client } from '../../config/google.js';
import OAuthToken from '../../models/OAuthToken.js';

const EXPIRY_BUFFER_MS = 60 * 1000;

function getExpiryDate(tokens) {
  if (tokens.expiry_date) {
    return new Date(tokens.expiry_date);
  }

  const expiresIn = tokens.expires_in || 3600;
  return new Date(Date.now() + expiresIn * 1000);
}

export async function saveOAuthTokens(userId, email, tokens, { setActive = true } = {}) {
  const expiryDate = getExpiryDate(tokens);

  if (setActive) {
    await OAuthToken.updateMany({ userId }, { isActive: false });
  }

  const existing = await OAuthToken.findOne({ userId, email });

  if (existing) {
    existing.accessToken = tokens.access_token;
    existing.refreshToken = tokens.refresh_token || existing.refreshToken;
    existing.expiryDate = expiryDate;
    if (setActive) {
      existing.isActive = true;
    }
    await existing.save();
    return existing;
  }

  return OAuthToken.create({
    userId,
    email,
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    expiryDate,
    isActive: setActive,
  });
}

export async function listAccounts(userId) {
  return OAuthToken.find({ userId })
    .select('email isActive createdAt updatedAt')
    .sort({ createdAt: 1 })
    .lean();
}

export async function setActiveAccount(userId, accountId) {
  const account = await OAuthToken.findOne({ _id: accountId, userId });

  if (!account) {
    const error = new Error('Account not found');
    error.status = 404;
    throw error;
  }

  await OAuthToken.updateMany({ userId }, { isActive: false });
  account.isActive = true;
  await account.save();

  return account;
}

export async function removeAccount(userId, accountId) {
  const account = await OAuthToken.findOne({ _id: accountId, userId });

  if (!account) {
    const error = new Error('Account not found');
    error.status = 404;
    throw error;
  }

  const wasActive = account.isActive;
  await account.deleteOne();

  if (wasActive) {
    const nextAccount = await OAuthToken.findOne({ userId }).sort({ createdAt: 1 });
    if (nextAccount) {
      nextAccount.isActive = true;
      await nextAccount.save();
    }
  }

  return { message: 'Account disconnected' };
}

export async function removeAllTokensForUser(userId) {
  await OAuthToken.deleteMany({ userId });
}

export async function getActiveAccount(userId) {
  let account = await OAuthToken.findOne({ userId, isActive: true });

  if (!account) {
    account = await OAuthToken.findOne({ userId }).sort({ createdAt: 1 });
    if (account) {
      account.isActive = true;
      await account.save();
    }
  }

  return account;
}

export async function getValidAccessToken(userId, accountId = null) {
  const account = accountId
    ? await OAuthToken.findOne({ _id: accountId, userId })
    : await getActiveAccount(userId);

  if (!account) {
    const error = new Error('No connected Gmail account found');
    error.status = 401;
    throw error;
  }

  const isExpired = account.expiryDate.getTime() - EXPIRY_BUFFER_MS <= Date.now();

  if (!isExpired) {
    return { accessToken: account.accessToken, account };
  }

  if (!account.refreshToken) {
    const error = new Error('Refresh token missing. Please reconnect Gmail.');
    error.status = 401;
    throw error;
  }

  const oauth2Client = createOAuth2Client();
  oauth2Client.setCredentials({ refresh_token: account.refreshToken });

  const { credentials } = await oauth2Client.refreshAccessToken();

  account.accessToken = credentials.access_token;
  account.expiryDate = getExpiryDate(credentials);
  if (credentials.refresh_token) {
    account.refreshToken = credentials.refresh_token;
  }
  await account.save();

  return { accessToken: account.accessToken, account };
}

export async function getAuthenticatedGmailClient(userId, accountId = null) {
  const { accessToken } = await getValidAccessToken(userId, accountId);
  const oauth2Client = createOAuth2Client();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.gmail({ version: 'v1', auth: oauth2Client });
}
