# OAuth Tokens Collection

**Phase:** Phase 10 - Database  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Finalize OAuthToken collection for multi-account Gmail (extends Phase 2).

---

## Requirements

- Fields: userId, email, accessToken, refreshToken, expiryDate, isActive
- Encrypt tokens at rest in production
- Compound unique index on userId + email

---

## Dependencies

- Prerequisite: Phase 2 (partial implementation exists)

---

## Implementation Steps

1. Review `src/models/OAuthToken.js`
2. Add token encryption middleware (optional)
3. Add TTL or cleanup for expired tokens

---

## Files to Create/Modify

- `src/models/OAuthToken.js`

---

## Testing

- [ ] Multiple accounts per user stored
- [ ] Token refresh updates record

---

## Notes

OAuthToken model already exists — enhance security for production.
