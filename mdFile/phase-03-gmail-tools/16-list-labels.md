# List Labels

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

List all Gmail labels for the authenticated user.

---

## Requirements

- Return system labels (INBOX, SENT, etc.) and user-created labels
- Include id, name, type (system/user)
- Optional message counts

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /gmail/labels | List all labels |

---

## Gmail API

- `users.labels.list`

---

## Dependencies

- Prerequisite: Phase 2 complete

---

## Implementation Steps

1. Add `listLabels(userId)` to Gmail service
2. Call labels.list
3. Map to simplified response format
4. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Returns INBOX, SENT, and custom labels
- [ ] Each label has id and name
- [ ] Returns 401 without auth

---

## Notes

Required for `listLabels` AI tool in Phase 5. Helps AI understand user's label structure.
