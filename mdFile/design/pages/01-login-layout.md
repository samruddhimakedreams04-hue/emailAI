# Login Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Login Page](../../phase-11-dashboard/01-login-page.md)  
**Route:** `/login`

---

## Layout

Full-screen centered — no sidebar or header.

```
┌─────────────────────────────────────┐
│                                     │
│         [Logo / App Name]           │
│                                     │
│    Email AI Agent                   │
│    Your intelligent inbox assistant │
│                                     │
│    ┌─────────────────────────┐      │
│    │  🔗 Connect with Gmail  │      │
│    └─────────────────────────┘      │
│                                     │
│    Powered by Gemini AI             │
│                                     │
└─────────────────────────────────────┘
```

---

## Sections

| Section | Description |
|---------|-------------|
| Hero | Logo, app name, tagline |
| CTA | Primary button → `/auth/google` |
| Footer | Optional subtitle or links |

---

## Visual Specs

- Background: gradient or solid light gray
- Card (optional): white card with shadow around CTA
- Button: full width on mobile, fixed width (~280px) on desktop
- Center vertically and horizontally

---

## States

| State | UI |
|-------|-----|
| Default | Connect button enabled |
| Loading | Button spinner after click |
| Error | Red alert if OAuth fails |

---

## Mobile

- Single column, 16px padding
- Button full width

---

## Notes

Only page without app shell layout.
