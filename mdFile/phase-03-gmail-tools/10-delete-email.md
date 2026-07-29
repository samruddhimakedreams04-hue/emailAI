# Delete Email

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Permanently delete an email message.

---

## Requirements

- Accept message id
- Move to Trash or permanently delete
- Confirm deletion success
- Handle already-deleted messages

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| DELETE | /gmail/emails/:id | Delete email |

---

## Gmail API

- `users.messages.trash` — move to trash (recoverable)
- `users.messages.delete` — permanent delete from trash

---

## Dependencies

- Prerequisite: [04-read-email-by-id.md](./04-read-email-by-id.md)

---

## Implementation Steps

1. Add `deleteEmail(userId, messageId, permanent?)` to Gmail service
2. Default: trash (safer)
3. Optional query param `permanent=true` for delete
4. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Email moves to Trash
- [ ] Permanent delete removes from Trash
- [ ] Invalid id returns 404

---

## Notes

Prefer trash by default for AI agent — permanent delete should require explicit confirmation or parameter.
