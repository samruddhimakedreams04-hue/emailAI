# Design System

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Related Phase:** Phase 11 - Dashboard  

---

## Objective

Define the visual design foundation for the Email AI Agent UI.

---

## Design Principles

- Clean, minimal interface (Gmail-inspired familiarity)
- AI features clearly visible but not overwhelming
- Mobile-responsive (tablet minimum; mobile optional)
- Accessible contrast and readable typography

---

## Recommended Frontend Stack

| Option | Technology |
|--------|------------|
| Framework | React + Vite or Next.js |
| Styling | Tailwind CSS |
| Components | shadcn/ui or custom |
| Icons | Lucide React |

---

## Breakpoints

| Name | Width |
|------|-------|
| Mobile | &lt; 768px |
| Tablet | 768px – 1024px |
| Desktop | &gt; 1024px |

---

## Layout Zones

```
┌─────────────────────────────────────────┐
│ Header (logo, user menu, account switch)  │
├──────────┬──────────────────────────────┤
│ Sidebar  │ Main content area            │
│ (nav)    │                              │
│          │                              │
└──────────┴──────────────────────────────┘
```

---

## Files to Reference

- [02-app-layout.md](./02-app-layout.md)
- [04-color-typography.md](./04-color-typography.md)
- [05-components.md](./05-components.md)

---

## Notes

Design docs are planning only — no code until Phase 11 implementation begins.
