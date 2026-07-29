# Read Unread Emails

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Fetch unread emails from the user's Gmail inbox.

---

## Requirements

- Query messages with label `UNREAD`
- Return list with id, subject, from, snippet, date
- Support pagination (maxResults, pageToken)
- Use authenticated user's OAuth token

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /gmail/emails/unread | List unread emails |

**Query params:** `maxResults` (default 10), `pageToken`

---

## Gmail API

- `users.messages.list` with `q: 'is:unread'`
- `users.messages.get` for full message details (batch or per id)

---

## Dependencies

- npm packages: `googleapis`
- Prerequisite: Phase 2 complete
- Service: `src/services/gmail/gmail.service.js`

---

## Implementation Steps

1. Add `listUnreadEmails(userId, options)` to Gmail service
2. Call messages.list with unread query
3. Fetch message metadata for each id
4. Parse headers (Subject, From, Date)
5. Create controller and route
6. Protect route with auth middleware

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Returns unread emails only
- [ ] Response includes id, subject, from, snippet
- [ ] Pagination works with pageToken
- [ ] Returns 401 without valid auth

---

## Notes

Use `format: 'metadata'` and `metadataHeaders` for efficient list responses before fetching full bodies when needed.
