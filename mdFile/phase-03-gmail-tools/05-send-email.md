# Send Email

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Send a new email message via Gmail API.

---

## Requirements

- Accept to, subject, body (plain or HTML)
- Optional cc, bcc
- Build RFC 2822 formatted raw message
- Send via Gmail API

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/send | Send new email |

**Body:**

```json
{
  "to": "recipient@example.com",
  "subject": "Hello",
  "body": "Email body text",
  "cc": [],
  "bcc": []
}
```

---

## Gmail API

- `users.messages.send` with base64url-encoded raw message

---

## Dependencies

- Prerequisite: Phase 2 complete (gmail.send scope)

---

## Implementation Steps

1. Add `sendEmail(userId, { to, subject, body, cc, bcc })` to Gmail service
2. Build MIME message string
3. Base64url encode raw message
4. Call messages.send
5. Validate input with Zod
6. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/utils/emailBuilder.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Email sends successfully
- [ ] Appears in sender's Sent folder
- [ ] Missing required fields return 400
- [ ] Invalid email address returns error

---

## Notes

Requires `gmail.send` scope. Create `emailBuilder.js` for MIME construction reused by reply and forward.
