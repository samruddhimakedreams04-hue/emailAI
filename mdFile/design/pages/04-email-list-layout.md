# Email List Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Email List Page](../../phase-11-dashboard/04-email-list-page.md)  
**Route:** `/emails`

---

## Layout

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Inbox                               │
│          │  [🔍 Search emails...              ]   │
│          │  [Inbox] [Unread] [Starred]          │
│          │  ─────────────────────────────────── │
│          │  ☐ ★ John Doe    Meeting tomorrow  9am│
│          │  ☐   Jane Smith  Project update   8am│
│          │  ☐ ★ Newsletter  Weekly digest   Mon│
│          │  ...                                 │
│          │  [Load more]                         │
└──────────┴──────────────────────────────────────┘
```

---

## Sections

| Section | Description |
|---------|-------------|
| Title | "Inbox" or filter name |
| Search bar | Gmail query search |
| Tabs | Inbox, Unread, Starred |
| Email list | Repeatable email rows |
| Pagination | Load more button |

---

## Email Row

| Column | Content |
|--------|---------|
| Checkbox | Bulk select (optional) |
| Star | Filled if starred |
| From | Sender name |
| Subject + snippet | Bold if unread |
| Date | Right-aligned |

---

## Interactions

- Click row → navigate to `/emails/:id`
- Tab change → refetch filtered list
- Search on enter → `/gmail/emails/search`

---

## Empty State

"No emails found" with illustration

---

## Notes

Gmail-like list UX for familiarity.
