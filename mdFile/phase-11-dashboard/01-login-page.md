# Login Page

**Phase:** Phase 11 - Dashboard  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Build frontend login page that initiates Google OAuth flow.

---

## Requirements

- "Connect Gmail" button → redirects to `/auth/google`
- Show app branding and description
- Handle OAuth errors from callback
- Responsive design

---

## Pages / Routes

| Route | Description |
|-------|-------------|
| `/login` | Login / connect Gmail page |

---

## Dependencies

- Prerequisite: Phase 2 authentication API
- Tech: React, Vue, or plain HTML (choose stack)

---

## Implementation Steps

1. Create frontend project or `public/` static pages
2. Login button links to backend OAuth URL
3. Redirect to dashboard after successful auth

---

## Files to Create/Modify

- `frontend/src/pages/Login.jsx` (or equivalent)

---

## Testing

- [ ] Connect Gmail redirects to Google
- [ ] Successful login lands on dashboard

---

## Notes

Backend OAuth already implemented in Phase 2.
