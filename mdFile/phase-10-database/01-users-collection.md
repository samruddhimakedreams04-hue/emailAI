# Users Collection

**Phase:** Phase 10 - Database  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Finalize Users collection schema and indexes (extends Phase 2).

---

## Requirements

- Fields: email, name, picture, googleId, timestamps
- Unique indexes on email and googleId
- Migration path from existing User model

---

## Schema

```javascript
{
  email: String,
  name: String,
  picture: String,
  googleId: String,
  createdAt, updatedAt
}
```

---

## Dependencies

- Prerequisite: Phase 2 (partial implementation exists)

---

## Implementation Steps

1. Review `src/models/User.js`
2. Add missing indexes
3. Document schema in this file

---

## Files to Create/Modify

- `src/models/User.js`

---

## Testing

- [ ] Unique email constraint enforced
- [ ] User CRUD works

---

## Notes

User model already exists from Phase 2 — Phase 10 formalizes full DB design.
