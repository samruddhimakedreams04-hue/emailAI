# Update Draft

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Update an existing draft email.

---

## Requirements

- Accept draft id and updated fields (to, subject, body)
- Replace draft message content
- Return updated draft

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| PUT | /gmail/drafts/:id | Update draft |

**Body:**

```json
{
  "to": "recipient@example.com",
  "subject": "Updated subject",
  "body": "Updated body"
}
```

---

## Gmail API

- `users.drafts.update` with draft id and new message raw

---

## Dependencies

- Prerequisite: [08-create-draft.md](./08-create-draft.md)

---

## Implementation Steps

1. Add `updateDraft(userId, draftId, emailData)` to Gmail service
2. Build updated MIME message
3. Call drafts.update
4. Add route and controller with validation

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Draft content updates in Gmail
- [ ] Invalid draft id returns 404
- [ ] Partial updates merge with existing content (if supported)

---

## Notes

Gmail drafts.update replaces the entire message. Fetch existing draft first if partial updates are needed.
