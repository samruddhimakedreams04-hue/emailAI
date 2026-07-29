# Reply Email

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Reply to an existing email thread.

---

## Requirements

- Accept messageId and reply body
- Set In-Reply-To and References headers
- Use threadId to keep conversation grouped
- Reply to original sender by default

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/:id/reply | Reply to email |

**Body:**

```json
{
  "body": "Reply text"
}
```

---

## Gmail API

- `users.messages.get` — fetch original for headers/threadId
- `users.messages.send` — send with threadId

---

## Dependencies

- Prerequisite: [04-read-email-by-id.md](./04-read-email-by-id.md), [05-send-email.md](./05-send-email.md)

---

## Implementation Steps

1. Fetch original message for threadId and Message-ID header
2. Build reply MIME with In-Reply-To and References
3. Set To as original From address
4. Send with threadId parameter
5. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/utils/emailBuilder.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Reply appears in same thread in Gmail
- [ ] Original sender receives reply
- [ ] Invalid message id returns 404

---

## Notes

Reply-all (including Cc) can be added as optional parameter later.
