# Refresh Token

**Phase:** Phase 2 - Authentication  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Automatically refresh expired access tokens using the stored refresh token.

---

## Requirements

- Detect when access token is expired or near expiry
- Use refresh token to obtain new access token
- Update stored tokens in database
- Transparent to Gmail API callers

---

## API / Endpoints

Internal service — no public endpoint required. Optional: background job or middleware.

---

## Dependencies

- npm packages: `googleapis`, `mongoose`
- Prerequisite: [04-access-token.md](./04-access-token.md)

---

## Implementation Steps

1. Create `src/services/auth/token.service.js` with `getValidAccessToken(userId)`
2. Check token expiry before Gmail API calls
3. If expired, call `oauth2Client.refreshAccessToken()`
4. Save new access token and expiry to database
5. Return valid access token to caller
6. Handle refresh failures (prompt re-login)

---

## Files to Create/Modify

- `src/services/auth/token.service.js`
- `src/models/OAuthToken.js`

---

## Testing

- [ ] Expired token triggers refresh automatically
- [ ] New access token is persisted
- [ ] Gmail API calls succeed after refresh
- [ ] Invalid refresh token returns clear error for re-auth

---

## Notes

Google refresh tokens can expire if unused or revoked. Always handle refresh failures and guide user to re-authenticate.
