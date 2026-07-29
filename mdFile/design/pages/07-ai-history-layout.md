# AI History Page Layout

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Task Doc:** [Phase 11 - AI History Page](../../phase-11-dashboard/07-ai-history-page.md)  
**Route:** `/ai-history`

---

## Layout

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  AI Conversation History             │
│          │  [🔍 Search conversations...      ]   │
│          │  ─────────────────────────────────── │
│          │  Today                               │
│          │  ┌────────────────────────────────┐  │
│          │  │ Show unread emails             │  │
│          │  │ 3 tools used · 2:30 PM    [→]  │  │
│          │  └────────────────────────────────┘  │
│          │  Yesterday                           │
│          │  ┌────────────────────────────────┐  │
│          │  │ Summarize newsletters          │  │
│          │  │ 5 tools used · 4:15 PM    [→]  │  │
│          │  └────────────────────────────────┘  │
└──────────┴──────────────────────────────────────┘
```

---

## Session List Item

| Field | Description |
|-------|-------------|
| Preview | First user message truncated |
| Tools used | Count or badge |
| Timestamp | Date/time |
| Arrow | Open full conversation |

---

## Detail View (click session)

- Full message thread replay
- Tools used per turn listed
- Option to continue conversation

---

## Grouping

- By date: Today, Yesterday, This week, Older

---

## Notes

Requires Phase 9/10 chat history backend.
