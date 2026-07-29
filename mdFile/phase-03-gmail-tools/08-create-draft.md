# Create Draft

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Create a draft email without sending.

---

## Requirements

- Accept to, subject, body
- Save as Gmail draft
- Return draft id for later update or send
- Optional threadId for reply drafts

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/drafts | Create draft |

**Body:**

```json
{
  "to": "recipient@example.com",
  "subject": "Draft subject",
  "body": "Draft body"
}
```

---

## Gmail API

- `users.drafts.create` with message raw content

---

## Dependencies

- Prerequisite: [05-send-email.md](./05-send-email.md) (emailBuilder utility)

---

## Implementation Steps

1. Add `createDraft(userId, emailData)` to Gmail service
2. Build MIME message same as send
3. Call drafts.create with encoded raw
4. Return draft id and message id
5. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Draft appears in Gmail Drafts folder
- [ ] Returns draft id
- [ ] Validation errors return 400

---

## Notes

Drafts are useful for AI-generated replies requiring user approval before send.
