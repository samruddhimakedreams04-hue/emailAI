# Email Detail Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Email Details Page](../../phase-11-dashboard/05-email-details-page.md)  
**Route:** `/emails/:id`

---

## Layout

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  ← Back to inbox                     │
│          │                                      │
│          │  Subject Line Here                   │
│          │  From: john@example.com              │
│          │  To: me@gmail.com    Date: Mar 29    │
│          │  ─────────────────────────────────── │
│          │  [Reply] [Forward] [Archive] [Delete]│
│          │  [✨ Summarize] [✨ Smart Reply]      │
│          │  ─────────────────────────────────── │
│          │                                      │
│          │  Email body content here...          │
│          │                                      │
│          │  Attachments: file.pdf (120kb)       │
└──────────┴──────────────────────────────────────┘
```

---

## Sections

| Section | Description |
|---------|-------------|
| Back link | Return to email list |
| Header | Subject, from, to, date |
| Action toolbar | Reply, forward, archive, delete |
| AI toolbar | Summarize, smart reply, classify |
| Body | HTML/plain email content (sanitized) |
| Attachments | List with download links |

---

## Action Buttons

| Button | Style |
|--------|-------|
| Reply, Forward | Secondary |
| Archive | Secondary |
| Delete | Danger |
| AI actions | Primary outline with sparkle icon |

---

## AI Panel (optional)

Slide-out or modal showing summary or generated reply

---

## Notes

Sanitize HTML email body to prevent XSS.
