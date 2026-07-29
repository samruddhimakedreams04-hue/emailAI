# Chat Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - Chat Page](../../phase-11-dashboard/03-chat-page.md)  
**Route:** `/chat`

---

## Layout

Full-height chat interface in main content area.

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  AI Chat                    [Clear]  │
│          │  ─────────────────────────────────── │
│          │                                      │
│          │  🤖 How can I help with your email?  │
│          │                                      │
│          │              Show unread emails  👤  │
│          │                                      │
│          │  🤖 You have 3 unread emails...      │
│          │     [readEmails]                     │
│          │                                      │
│          │  ─────────────────────────────────── │
│          │  [ Type a message...        ] [Send]│
└──────────┴──────────────────────────────────────┘
```

---

## Sections

| Section | Description |
|---------|-------------|
| Header | Title, optional clear/new chat button |
| Message list | Scrollable chat history |
| Input bar | Fixed bottom: textarea + send button |

---

## Message Bubbles

- **User:** right-aligned, blue/light background
- **AI:** left-aligned, gray background
- **Tools badge:** small pills under AI msg (`readEmails`, etc.)
- **Loading:** typing indicator "AI is thinking..."

---

## Suggested Prompts (empty state)

- "Show my unread emails"
- "Summarize today's inbox"
- "Search emails from..."

---

## Mobile

- Input bar sticky bottom
- Full width messages

---

## Notes

Core AI agent UI — connect to `POST /chat` API.
