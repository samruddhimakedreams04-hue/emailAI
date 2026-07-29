# Remove Star

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Remove star from an email.

---

## Requirements

- Remove STARRED label from message
- Return success confirmation

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| DELETE | /gmail/emails/:id/star | Remove star from email |

---

## Gmail API

- `users.messages.modify` with `removeLabelIds: ['STARRED']`

---

## Dependencies

- Prerequisite: [14-star-email.md](./14-star-email.md)

---

## Implementation Steps

1. Add `unstarEmail(userId, messageId)` to Gmail service
2. Call messages.modify
3. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] STARRED label removed
- [ ] Email no longer in starred list
- [ ] Invalid id returns 404

---

## Notes

Pair with star email for complete label management.
