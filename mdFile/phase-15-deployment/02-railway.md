# Railway Deployment

**Phase:** Phase 15 - Deployment  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Deploy the app to Railway with environment variables and MongoDB.

---

## Requirements

- Connect GitHub repo to Railway
- Set all env vars in Railway dashboard
- Custom domain optional
- Health check on `/health`

---

## Environment Variables

PORT, GEMINI_API_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI, JWT_SECRET, MONGODB_URI

---

## Implementation Steps

1. Create Railway project
2. Add MongoDB plugin or use Atlas URI
3. Configure env vars and deploy
4. Update Google OAuth redirect URI to Railway URL

---

## Testing

- [ ] App deploys without errors
- [ ] OAuth callback works with production URL
- [ ] Health endpoint returns 200

---

## Notes

Update `GOOGLE_REDIRECT_URI` to match Railway domain.
