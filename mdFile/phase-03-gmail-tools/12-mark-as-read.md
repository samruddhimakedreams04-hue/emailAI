# Mark as Read

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Mark an email as read by removing the UNREAD label.

---

## Requirements

- Accept message id
- Remove UNREAD label
- Return updated message state

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/:id/read | Mark email as read |

---

## Gmail API

- `users.messages.modify` with `removeLabelIds: ['UNREAD']`

---

## Dependencies

- Prerequisite: [04-read-email-by-id.md](./04-read-email-by-id.md)

---

## Implementation Steps

1. Add `markAsRead(userId, messageId)` to Gmail service
2. Call messages.modify
3. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] UNREAD label removed
- [ ] Email no longer appears in unread list
- [ ] Already-read email returns success (idempotent)

---

## Notes

Can be called automatically after AI reads/summarizes an email.
