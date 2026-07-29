# Connected Accounts Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Connected Accounts](../../phase-11-dashboard/06-connected-accounts-page.md)  
**Route:** `/accounts`

---

## Layout

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Connected Gmail Accounts            │
│          │                                      │
│          │  [+ Add another account]             │
│          │  ─────────────────────────────────── │
│          │  ┌────────────────────────────────┐  │
│          │  │ user@gmail.com    ● Active     │  │
│          │  │ Connected Mar 1   [Switch][×]  │  │
│          │  └────────────────────────────────┘  │
│          │  ┌────────────────────────────────┐  │
│          │  │ work@gmail.com                 │  │
│          │  │ Connected Feb 15 [Switch][×] │  │
│          │  └────────────────────────────────┘  │
└──────────┴──────────────────────────────────────┘
```

---

## Account Card

| Element | Description |
|---------|-------------|
| Email | Gmail address |
| Status | "Active" badge on current account |
| Connected date | Metadata |
| Switch | Set as active account |
| Disconnect | Remove account (×) |

---

## Add Account

- Button links to `/auth/google` (while logged in)
- Adds second Gmail to same user

---

## Empty State

"No accounts connected" + Connect Gmail CTA

---

## Notes

Active account determines which inbox Gmail APIs use.
