# Conversation History

**Phase:** Phase 9 - Memory  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Persist chat conversation history per user in MongoDB.

---

## Requirements

- Store user messages and assistant responses
- Link to userId and sessionId
- Retrieve history for context in future chats
- Pagination support

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /memory/conversations | List chat sessions |
| GET | /memory/conversations/:id | Get conversation messages |

---

## Dependencies

- Prerequisite: Phase 4 chat, Phase 10 ChatHistory collection

---

## Implementation Steps

1. Create `ChatHistory` model
2. Save messages after each `/chat` response
3. Load recent history into Gemini context optionally

---

## Files to Create/Modify

- `src/models/ChatHistory.js`
- `src/services/memory/conversation.service.js`

---

## Testing

- [ ] Messages persisted after chat
- [ ] History retrievable by user

---

## Notes

Limit context window — send last N messages to Gemini only.
