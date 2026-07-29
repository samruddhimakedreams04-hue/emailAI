# AI Memory Collection

**Phase:** Phase 10 - Database  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Store long-term AI memory: contacts, writing style, learned facts.

---

## Requirements

- Key-value memory per userId
- Types: contact, style, fact, preference
- Retrieve relevant memory for chat context

---

## Schema

```javascript
{
  userId: ObjectId,
  type: String,
  key: String,
  value: Object,
  updatedAt: Date
}
```

---

## Dependencies

- Prerequisite: Phase 9 memory features

---

## Implementation Steps

1. Create `src/models/AiMemory.js`
2. CRUD service for memory entries
3. Inject into agent prompt when relevant

---

## Files to Create/Modify

- `src/models/AiMemory.js`
- `src/services/memory/memory.service.js`

---

## Testing

- [ ] Memory saved and retrieved
- [ ] Agent uses memory in responses

---

## Notes

Keep memory concise to avoid token bloat in Gemini context.
