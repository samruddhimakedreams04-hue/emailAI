# Chat History Collection

**Phase:** Phase 10 - Database  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Create ChatHistory collection for persisted conversations.

---

## Requirements

- Fields: userId, sessionId, role, content, toolsUsed, createdAt
- Index on userId + sessionId
- Optional TTL for old sessions

---

## Schema

```javascript
{
  userId: ObjectId,
  sessionId: String,
  messages: [{ role, content, toolsUsed, createdAt }]
}
```

---

## Dependencies

- Prerequisite: Phase 9 conversation history

---

## Implementation Steps

1. Create `src/models/ChatHistory.js`
2. Save after each chat/agent request
3. Add pagination queries

---

## Files to Create/Modify

- `src/models/ChatHistory.js`

---

## Testing

- [ ] Chat sessions stored
- [ ] Query by userId works

---

## Notes

Supports dashboard AI history page in Phase 11.
