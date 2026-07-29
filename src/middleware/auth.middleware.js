import jwt from 'jsonwebtoken';

function extractToken(req) {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  return req.cookies?.token || null;
}

export function authenticate(req, res, next) {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: payload.userId,
      activeAccountId: payload.activeAccountId || null,
    };
    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export function optionalAuthenticate(req, res, next) {
  const token = extractToken(req);

  if (!token) {
    return next();
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: payload.userId,
      activeAccountId: payload.activeAccountId || null,
    };
  } catch {
    // Ignore invalid token for optional auth routes
  }

  return next();
}

export function signSessionToken(userId, activeAccountId = null) {
  return jwt.sign({ userId, activeAccountId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
}

export function signOAuthState(userId = null) {
  return jwt.sign({ userId, purpose: 'oauth' }, process.env.JWT_SECRET, {
    expiresIn: '10m',
  });
}

export function verifyOAuthState(state) {
  const payload = jwt.verify(state, process.env.JWT_SECRET);

  if (payload.purpose !== 'oauth') {
    throw new Error('Invalid OAuth state');
  }

  return payload;
}
