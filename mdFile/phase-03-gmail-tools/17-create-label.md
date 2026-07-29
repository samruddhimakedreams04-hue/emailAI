# Create Label

**Phase:** Phase 3 - Gmail Tools  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Create a new custom Gmail label.

---

## Requirements

- Accept label name
- Optional visibility settings (labelListVisibility, messageListVisibility)
- Return created label id and name
- Prevent duplicate label names

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /gmail/labels | Create new label |

**Body:**

```json
{
  "name": "AI-Processed"
}
```

---

## Gmail API

- `users.labels.create`

---

## Dependencies

- Prerequisite: [16-list-labels.md](./16-list-labels.md)

---

## Implementation Steps

1. Add `createLabel(userId, name, options?)` to Gmail service
2. Call labels.create with name
3. Validate name with Zod
4. Handle duplicate name error from Gmail
5. Add route and controller

---

## Files to Create/Modify

- `src/services/gmail/gmail.service.js`
- `src/controllers/gmail.controller.js`
- `src/routes/gmail.routes.js`

---

## Testing

- [ ] Label created and visible in Gmail
- [ ] Returns label id
- [ ] Duplicate name returns appropriate error
- [ ] Empty name returns 400

---

## Notes

AI could auto-create labels like "Newsletters" or "Urgent" based on classification in Phase 6/7.
