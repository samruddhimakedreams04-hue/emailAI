# Settings Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Settings Page](../../phase-11-dashboard/08-settings-page.md)  
**Route:** `/settings`

---

## Layout

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Settings                            │
│          │                                      │
│          │  Preferences                         │
│          │  ─────────────────────────────────── │
│          │  Default tone    [Professional ▼]    │
│          │  Language        [English ▼]         │
│          │  Max emails      [10 ▼]              │
│          │                                      │
│          │  Email Signature                     │
│          │  ─────────────────────────────────── │
│          │  ┌────────────────────────────────┐  │
│          │  │ Best regards,                  │  │
│          │  │ John Doe                       │  │
│          │  └────────────────────────────────┘  │
│          │                                      │
│          │  Notifications                       │
│          │  ─────────────────────────────────── │
│          │  [✓] New email alerts                │
│          │  [✓] Urgent email alerts             │
│          │  [ ] Daily AI summary                │
│          │                                      │
│          │  [Save changes]        [Log out]     │
└──────────┴──────────────────────────────────────┘
```

---

## Sections

| Section | Fields |
|---------|--------|
| Preferences | Tone, language, max emails |
| Signature | Textarea for email signature |
| Notifications | Toggles for alert types |
| Actions | Save, Logout |

---

## Form Style

- Label left, control right (desktop)
- Stacked on mobile
- Save shows toast on success

---

## Logout

- Red or secondary button
- Calls `POST /auth/logout`
- Redirect to `/login`

---

## Notes

Central user customization; links to Phase 9 memory features.
