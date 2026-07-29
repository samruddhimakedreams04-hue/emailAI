# Logout

**Phase:** Phase 2 - Authentication  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Implement logout to clear user session and revoke stored tokens.

---

## Requirements

- `POST /auth/logout` clears session
- Invalidate or remove stored OAuth tokens
- Clear JWT/session cookie if used
- Return success response

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/logout | Clear session and tokens |

**Response example:**

```json
{
  "message": "Logged out successfully"
}
```

---

## Dependencies

- Prerequisite: [04-access-token.md](./04-access-token.md), [02-login.md](./02-login.md)

---

## Implementation Steps

1. Add `POST /auth/logout` route in auth routes
2. Identify user from JWT or session
3. Remove or invalidate tokens in database
4. Clear session cookie / JWT
5. Return 200 with success message

---

## Files to Create/Modify

- `src/routes/auth.routes.js`
- `src/controllers/auth.controller.js`
- `src/services/auth/token.service.js`

---

## Testing

- [ ] Logout returns 200 success
- [ ] Subsequent API calls fail without re-authentication
- [ ] Tokens are removed from database

---

## Notes

Consider optional Google token revocation via `oauth2Client.revokeToken()` for full disconnect.
