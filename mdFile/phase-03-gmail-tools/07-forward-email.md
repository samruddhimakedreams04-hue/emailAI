# Forward Email

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Forward an existing email to a new recipient.

---

## Requirements

- Accept messageId, to address, optional comment
- Include original message in forwarded body
- Prefix subject with "Fwd: "
- Preserve original headers in quoted body

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/emails/:id/forward | Forward email |

**Body:**

```json
{
  "to": "newrecipient@example.com",
  "comment": "See below"
}
```

---

## Gmail API

- `users.messages.get` — fetch original
- `users.messages.send` — send forwarded message

---

## Dependencies

- Prerequisite: [04-read-email-by-id.md](./04-read-email-by-id.md), [05-send-email.md](./05-send-email.md)

---

## Implementation Steps

1. Fetch original message content
2. Build forward body with optional comment and quoted original
3. Set subject with "Fwd: " prefix if not present
4. Send as new message (no threadId)
5. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/utils/emailBuilder.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Forwarded email received by new recipient
- [ ] Original content included in body
- [ ] Subject prefixed correctly

---

## Notes

Forwarding creates a new thread unlike reply. Optional attachment forwarding requires additional Gmail API handling.
