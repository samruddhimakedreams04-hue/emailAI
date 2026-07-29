# Google OAuth 2.0

**Phase:** Phase 2 - Authentication  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Configure Google OAuth 2.0 credentials and OAuth client for Gmail API access.

---

## Requirements

- Create project in Google Cloud Console
- Enable Gmail API
- Create OAuth 2.0 Client ID (Web application)
- Configure authorized redirect URI
- Request appropriate Gmail scopes

---

## API / Endpoints

Not applicable for this task (Console setup).

---

## Dependencies

- npm packages: `googleapis`
- Prerequisite: Phase 1 complete
- Google Cloud Console account

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| GOOGLE_CLIENT_ID | OAuth client ID from Google Console |
| GOOGLE_CLIENT_SECRET | OAuth client secret |
| GOOGLE_REDIRECT_URI | Callback URL (e.g. `http://localhost:3000/auth/google/callback`) |

---

## Gmail Scopes

- `https://www.googleapis.com/auth/gmail.readonly` — read emails
- `https://www.googleapis.com/auth/gmail.send` — send emails
- `https://www.googleapis.com/auth/gmail.modify` — modify labels, archive, etc.
- `https://www.googleapis.com/auth/gmail.compose` — create drafts

---

## Implementation Steps

1. Create Google Cloud project
2. Enable Gmail API
3. Create OAuth 2.0 credentials (Web application)
4. Add redirect URI matching `GOOGLE_REDIRECT_URI`
5. Copy Client ID and Secret to `.env`
6. Create `src/config/google.js` with OAuth2 client setup using `googleapis`

---

## Files to Create/Modify

- `src/config/google.js`
- `.env`

---

## Testing

- [ ] OAuth client initializes without errors
- [ ] Redirect URI matches Google Console configuration
- [ ] Required scopes are included in auth URL generation

---

## Notes

Store credentials only in `.env`. Never commit secrets. For production, use a secure redirect URI on your deployed domain.
