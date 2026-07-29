# Frequently Contacted People

**Phase:** Phase 9 - Memory  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Track and suggest frequently contacted email addresses.

---

## Requirements

- Count interactions per contact from sent/replied emails
- Store top contacts per user
- Suggest contacts when composing emails

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /memory/contacts/frequent | List frequent contacts |

---

## Dependencies

- Prerequisite: Phase 7 contact extraction, Phase 10 AI Memory collection

---

## Implementation Steps

1. Create AiMemory model for contacts
2. Increment count on send/reply actions
3. Return sorted list by frequency

---

## Files to Create/Modify

- `src/models/AiMemory.js`
- `src/services/memory/contacts.service.js`

---

## Testing

- [ ] Contact count increases on send/reply
- [ ] Top contacts returned correctly

---

## Notes

Optional autocomplete in Phase 11 dashboard compose UI.
