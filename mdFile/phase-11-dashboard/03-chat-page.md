# Chat Page

**Phase:** Phase 11 - Dashboard  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Chat UI for conversing with the Email AI Agent (Gemini + tools).

---

## Requirements

- Message input and history display
- Call `POST /chat` with JWT
- Show tools used in agent responses
- Loading and error states

---

## Pages / Routes

| Route | Description |
|-------|-------------|
| `/chat` | AI chat interface |

---

## Dependencies

- Prerequisite: Phase 4, Phase 5

---

## Implementation Steps

1. Build chat message list component
2. Send messages to `/chat` API
3. Display `toolsUsed` when present
4. Optional: load conversation history from Phase 9

---

## Files to Create/Modify

- `frontend/src/pages/Chat.jsx`

---

## Testing

- [ ] Send message and receive response
- [ ] "Show unread emails" triggers agent tools
- [ ] Errors displayed gracefully

---

## Notes

Core user interface for the AI agent product.
