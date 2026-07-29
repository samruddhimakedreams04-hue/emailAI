# App Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Related Phase:** Phase 11 - Dashboard  

---

## Objective

Define the main application shell used on all authenticated pages.

---

## Structure

```
AppLayout
├── HeaderBar
│   ├── Logo / App name
│   ├── Active Gmail account badge
│   └── User avatar + dropdown
├── Sidebar (collapsible on mobile)
│   └── Navigation links
└── MainContent
    └── Page-specific content (outlet)
```

---

## Header

| Element | Position | Description |
|---------|----------|-------------|
| Logo | Left | "Email AI Agent" text or icon |
| Account badge | Center-right | Active Gmail email |
| User menu | Right | Profile, settings, logout |

**Height:** 56–64px

---

## Sidebar

| Property | Desktop | Mobile |
|----------|---------|--------|
| Width | 240px | Hidden (hamburger drawer) |
| Position | Fixed left | Overlay drawer |

---

## Main Content

- Padding: 24px (desktop), 16px (mobile)
- Max width: 1200px (optional centered container)
- Background: light gray (`#f5f5f5`) or white

---

## Pages Without Sidebar

- `/login` — full-screen centered layout only

---

## Related

- [03-navigation-sidebar.md](./03-navigation-sidebar.md)
- [pages/02-dashboard-layout.md](./pages/02-dashboard-layout.md)

---

## Notes

Use consistent layout wrapper component across all dashboard routes.
