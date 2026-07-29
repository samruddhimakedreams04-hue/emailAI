# Connected Accounts Page

**Phase:** Phase 11 - Dashboard  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Manage connected Gmail accounts (multi-account from Phase 2).

---

## Requirements

- List connected accounts with active indicator
- Switch active account
- Disconnect account
- Add new account button

---

## Pages / Routes

| Route | Description |
|-------|-------------|
| `/accounts` | Connected Gmail accounts |

---

## Dependencies

- Prerequisite: Phase 2 `/auth/accounts` APIs

---

## Implementation Steps

1. Fetch accounts from `GET /auth/accounts`
2. Activate via `POST /auth/accounts/:id/activate`
3. Disconnect via `DELETE /auth/accounts/:id`

---

## Files to Create/Modify

- `frontend/src/pages/Accounts.jsx`

---

## Testing

- [ ] Lists all connected accounts
- [ ] Switch active account updates inbox
- [ ] Disconnect removes account

---

## Notes

Show which account is currently active for Gmail operations.
