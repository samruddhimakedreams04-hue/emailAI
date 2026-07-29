# Search Emails

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Search emails using Gmail search query syntax.

---

## Requirements

- Accept search query string (Gmail q syntax)
- Support filters: from, to, subject, date, has:attachment
- Return matching message list
- Validate and sanitize query input

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /gmail/emails/search | Search emails by query |

**Query params:** `q` (required), `maxResults`, `pageToken`

**Example:** `?q=from:boss@company.com is:unread`

---

## Gmail API

- `users.messages.list` with `q` parameter

---

## Dependencies

- Prerequisite: [01-read-unread-emails.md](./01-read-unread-emails.md)

---

## Implementation Steps

1. Add `searchEmails(userId, query, options)` to Gmail service
2. Pass query to messages.list
3. Fetch metadata for results
4. Add route with query validation (Zod)
5. Return standardized email list

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Search by from address returns correct emails
- [ ] Combined queries work (e.g. `is:unread from:x`)
- [ ] Empty query returns 400 error
- [ ] No results returns empty array

---

## Notes

Gmail search syntax is powerful. Document common patterns for AI tool calling in Phase 5.
