# Navigation Sidebar

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Related Phase:** Phase 11 - Dashboard  

---

## Objective

Define sidebar navigation items and behavior.

---

## Menu Items

| Icon | Label | Route | Active state |
|------|-------|-------|--------------|
| Home | Dashboard | `/dashboard` | Highlight when on route |
| Mail | Emails | `/emails` | |
| Message | AI Chat | `/chat` | |
| History | AI History | `/ai-history` | |
| Users | Accounts | `/accounts` | |
| Settings | Settings | `/settings` | |

---

## Visual Style

- Icon + label on desktop
- Icon only when sidebar collapsed (optional)
- Active item: primary color background or left border accent
- Hover: subtle background change

---

## Mobile Behavior

- Hamburger icon in header opens drawer
- Drawer overlays content with backdrop
- Tap outside or X to close

---

## Footer (optional)

- App version
- "Connected to Gmail" status indicator

---

## Related

- [02-app-layout.md](./02-app-layout.md)

---

## Notes

Match routes to Phase 11 dashboard pages.
