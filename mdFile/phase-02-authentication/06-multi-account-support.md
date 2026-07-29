# Multi-Account Support

**Phase:** Phase 2 - Authentication  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Allow a user to connect and manage multiple Gmail accounts.

---

## Requirements

- Link multiple Gmail accounts to one app user
- List connected accounts
- Switch active account for API operations
- Disconnect individual accounts without affecting others

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /auth/accounts | List connected Gmail accounts |
| POST | /auth/accounts/:id/activate | Set active account for session |
| DELETE | /auth/accounts/:id | Disconnect a Gmail account |

---

## Dependencies

- Prerequisite: [04-access-token.md](./04-access-token.md), [03-logout.md](./03-logout.md)

---

## Data Model

- User has many OAuthToken records
- Each OAuthToken: email, accessToken, refreshToken, expiry, isActive
- Session or JWT includes activeAccountId

---

## Implementation Steps

1. Extend OAuthToken model with email and userId
2. On OAuth callback, create new token record (do not overwrite existing)
3. Implement `GET /auth/accounts` to list connected emails
4. Implement account switch and disconnect endpoints
5. Pass active account token to Gmail service

---

## Files to Create/Modify

- `src/models/OAuthToken.js`
- `src/routes/auth.routes.js`
- `src/controllers/auth.controller.js`
- `src/services/auth/token.service.js`

---

## Testing

- [ ] User can connect second Gmail account
- [ ] List shows all connected accounts
- [ ] Switching active account changes which inbox is used
- [ ] Disconnect removes one account only

---

## Notes

Each connected account needs its own token refresh logic. Consider UI in Phase 11 dashboard for account management.
