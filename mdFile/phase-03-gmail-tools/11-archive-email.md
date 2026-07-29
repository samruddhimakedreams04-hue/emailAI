# Archive Email

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Archive an email (remove from inbox without deleting).

---

## Requirements

- Remove INBOX label from message
- Message remains searchable in All Mail
- Support batch archive (optional)

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/:id/archive | Archive email |

---

## Gmail API

- `users.messages.modify` with `removeLabelIds: ['INBOX']`

---

## Dependencies

- Prerequisite: [04-read-email-by-id.md](./04-read-email-by-id.md)

---

## Implementation Steps

1. Add `archiveEmail(userId, messageId)` to Gmail service
2. Call messages.modify to remove INBOX label
3. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Email removed from inbox
- [ ] Email still accessible via search/get by id
- [ ] Invalid id returns 404

---

## Notes

Common AI workflow: archive newsletters after summarizing. Maps to `archiveEmail` tool in Phase 5.
