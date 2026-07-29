# Read Email by ID

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Fetch full email content by message ID.

---

## Requirements

- Retrieve complete message including body (HTML/plain)
- Parse headers: Subject, From, To, Cc, Date
- Include attachments metadata (filename, size, id)
- Handle multipart messages

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /gmail/emails/:id | Get email by message ID |

---

## Gmail API

- `users.messages.get` with `format: 'full'`

---

## Dependencies

- Prerequisite: [01-read-unread-emails.md](./01-read-unread-emails.md)

---

## Implementation Steps

1. Add `getEmailById(userId, messageId)` to Gmail service
2. Fetch full message
3. Decode base64 body parts (plain and HTML)
4. Extract attachment metadata from payload parts
5. Return structured email object

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/utils/emailParser.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Valid id returns full email with body
- [ ] Invalid id returns 404
- [ ] Multipart emails parse correctly
- [ ] Attachment list included when present

---

## Notes

Create `emailParser.js` utility for base64 decoding and MIME parsing. Reuse across read operations.
