# Access Token

**Phase:** Phase 2 - Authentication  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Exchange OAuth authorization code for access token and store it securely after callback.

---

## Requirements

- `GET /auth/google/callback` handles OAuth redirect
- Exchange code for access and refresh tokens
- Store tokens in database linked to user
- Issue JWT for app session (optional)
- Handle OAuth errors gracefully

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /auth/google/callback | OAuth callback, exchange code for tokens |

**Query params:** `code`, `error` (from Google)

---

## Dependencies

- npm packages: `googleapis`, `mongoose`, `jsonwebtoken`
- Prerequisite: [01-google-oauth.md](./01-google-oauth.md), [02-login.md](./02-login.md)

---

## Implementation Steps

1. Add callback route `GET /auth/google/callback`
2. Extract `code` from query string
3. Call `oauth2Client.getToken(code)` to get tokens
4. Create or update user record in MongoDB
5. Store access token, refresh token, expiry in OAuthToken collection
6. Issue JWT and set cookie or return token in response
7. Redirect to dashboard or return JSON

---

## Files to Create/Modify

- `src/routes/auth.routes.js`
- `src/controllers/auth.controller.js`
- `src/services/auth/token.service.js`
- `src/models/User.js`
- `src/models/OAuthToken.js`

---

## Testing

- [ ] Successful OAuth flow stores tokens in database
- [ ] Invalid or missing code returns appropriate error
- [ ] JWT/session allows authenticated API access

---

## Notes

MongoDB is needed early for token storage even though full database docs are in Phase 10. Encrypt tokens at rest in production.
