# Email Logs Collection

**Phase:** Phase 10 - Database  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Log Gmail actions performed by user or AI agent for audit trail.

---

## Requirements

- Log: action type, messageId, userId, timestamp, success/failure
- Actions: send, reply, archive, delete, draft
- Queryable by user and date range

---

## Schema

```javascript
{
  userId: ObjectId,
  action: String,
  messageId: String,
  metadata: Object,
  success: Boolean,
  createdAt: Date
}
```

---

## Dependencies

- Prerequisite: Phase 3 Gmail tools

---

## Implementation Steps

1. Create `src/models/EmailLog.js`
2. Log from gmail.service.js after each action
3. Add GET /logs/emails endpoint (optional)

---

## Files to Create/Modify

- `src/models/EmailLog.js`
- `src/services/gmail/gmail.service.js`

---

## Testing

- [ ] Send action creates log entry
- [ ] Failed actions logged with error

---

## Notes

Useful for debugging agent behavior and user audit.
