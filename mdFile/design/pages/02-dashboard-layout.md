# Dashboard Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Dashboard Page](../../phase-11-dashboard/02-dashboard-page.md)  
**Route:** `/dashboard`

---

## Layout

Uses [app layout](../02-app-layout.md) with sidebar + main content.

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Welcome back, {name}                │
│          │                                      │
│          │  ┌────────┐ ┌────────┐ ┌────────┐   │
│          │  │ Unread │ │ Today  │ │ Urgent │   │
│          │  │   12   │ │   45   │ │   3    │   │
│          │  └────────┘ └────────┘ └────────┘   │
│          │                                      │
│          │  Recent Emails          [View all →] │
│          │  ┌────────────────────────────────┐  │
│          │  │ Email row 1                    │  │
│          │  │ Email row 2                    │  │
│          │  │ Email row 3                    │  │
│          │  └────────────────────────────────┘  │
│          │                                      │
│          │  Quick Actions                       │
│          │  [AI Chat] [Search] [Compose]        │
└──────────┴──────────────────────────────────────┘
```

---

## Sections

| Section | Content |
|---------|---------|
| Welcome header | User name, active Gmail account |
| Stats row | 3 stat cards: unread, today, urgent |
| Recent emails | Last 5 emails preview list |
| Quick actions | Buttons to chat, search, compose |

---

## Stat Cards

- Icon + number + label
- Click navigates to filtered email list

---

## Notes

Home page after login; prioritize scannable overview.
