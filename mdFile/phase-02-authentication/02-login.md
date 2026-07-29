# Login

**Phase:** Phase 2 - Authentication  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Implement login flow that redirects users to Google consent screen.

---

## Requirements

- `GET /auth/google` initiates OAuth flow
- Generate authorization URL with scopes
- Redirect user to Google login/consent
- Support optional state parameter for CSRF protection

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /auth/google | Redirect to Google OAuth consent screen |

---

## Dependencies

- npm packages: `googleapis`
- Prerequisite: [01-google-oauth.md](./01-google-oauth.md)

---

## Implementation Steps

1. Create `src/routes/auth.routes.js`
2. Create `src/controllers/auth.controller.js`
3. Implement `GET /auth/google` handler
4. Use OAuth2 client to generate auth URL with scopes
5. Redirect response to Google auth URL
6. Mount auth routes in `src/app.js`

---

## Files to Create/Modify

- `src/routes/auth.routes.js`
- `src/controllers/auth.controller.js`
- `src/app.js`

---

## Testing

- [ ] `GET /auth/google` returns 302 redirect
- [ ] Redirect URL points to accounts.google.com
- [ ] URL includes required Gmail scopes

---

## Notes

This endpoint does not require authentication. It is the entry point for connecting a Gmail account.
