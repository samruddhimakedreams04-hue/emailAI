# Read Latest Emails

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Fetch the most recent emails from inbox regardless of read status.

---

## Requirements

- Return latest emails sorted by date
- Configurable limit (default 10)
- Include subject, from, snippet, date, read status
- Support inbox label filter

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /gmail/emails/latest | List latest inbox emails |

**Query params:** `maxResults` (default 10), `pageToken`

---

## Gmail API

- `users.messages.list` with `labelIds: ['INBOX']`
- `users.messages.get` for message details

---

## Dependencies

- Prerequisite: [01-read-unread-emails.md](./01-read-unread-emails.md)

---

## Implementation Steps

1. Add `listLatestEmails(userId, options)` to Gmail service
2. List messages in INBOX ordered by internal date
3. Parse and return standardized email objects
4. Add route and controller handler

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Returns most recent emails first
- [ ] Respects maxResults limit
- [ ] Includes read/unread status in response

---

## Notes

Differs from unread-only by including all inbox messages. Useful for "show my recent emails" AI commands.
