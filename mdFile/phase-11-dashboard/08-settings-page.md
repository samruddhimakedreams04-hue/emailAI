# Settings Page

**Phase:** Phase 11 - Dashboard  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

User settings: preferences, signature, notifications, logout.

---

## Requirements

- Edit preferences (tone, language)
- Edit email signature
- Notification toggles (Phase 12)
- Logout button

---

## Pages / Routes

| Route | Description |
|-------|-------------|
| `/settings` | User settings |

---

## Dependencies

- Prerequisite: Phase 9 memory, Phase 10 Settings collection

---

## Implementation Steps

1. Load settings from API
2. Form for preferences and signature
3. Save via PUT endpoints
4. Logout calls `POST /auth/logout`

---

## Files to Create/Modify

- `frontend/src/pages/Settings.jsx`

---

## Testing

- [ ] Settings save and reload correctly
- [ ] Logout clears session

---

## Notes

Central place for user customization.
