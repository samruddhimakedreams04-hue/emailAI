# Mark as Unread

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Mark an email as unread by adding the UNREAD label.

---

## Requirements

- Accept message id
- Add UNREAD label
- Return updated message state

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/:id/unread | Mark email as unread |

---

## Gmail API

- `users.messages.modify` with `addLabelIds: ['UNREAD']`

---

## Dependencies

- Prerequisite: [12-mark-as-read.md](./12-mark-as-read.md)

---

## Implementation Steps

1. Add `markAsUnread(userId, messageId)` to Gmail service
2. Call messages.modify with addLabelIds
3. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] UNREAD label added
- [ ] Email appears in unread list
- [ ] Invalid id returns 404

---

## Notes

Useful for "flag for later" workflows without starring.
