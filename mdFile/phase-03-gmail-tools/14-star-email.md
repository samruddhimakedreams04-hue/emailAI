# Star Email

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Star an email for follow-up or importance.

---

## Requirements

- Add STARRED label to message
- Return success confirmation

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/:id/star | Star email |

---

## Gmail API

- `users.messages.modify` with `addLabelIds: ['STARRED']`

---

## Dependencies

- Prerequisite: [04-read-email-by-id.md](./04-read-email-by-id.md)

---

## Implementation Steps

1. Add `starEmail(userId, messageId)` to Gmail service
2. Call messages.modify
3. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] STARRED label added
- [ ] Email appears in starred filter
- [ ] Idempotent on already-starred email

---

## Notes

AI can star urgent emails detected in Phase 7 smart analysis.
