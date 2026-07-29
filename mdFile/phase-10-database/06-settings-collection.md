# Settings Collection

**Phase:** Phase 10 - Database  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Store user settings: preferences, signature, notifications config.

---

## Requirements

- One settings document per userId
- Fields: preferences, signature, notificationSettings
- Default settings on user creation

---

## Schema

```javascript
{
  userId: ObjectId,
  preferences: Object,
  signature: String,
  notificationSettings: Object
}
```

---

## Dependencies

- Prerequisite: Phase 9 preferences, Phase 11 settings page

---

## Implementation Steps

1. Create `src/models/Settings.js`
2. Create default settings on first login
3. Expose via GET/PUT /settings

---

## Files to Create/Modify

- `src/models/Settings.js`
- `src/controllers/settings.controller.js`

---

## Testing

- [ ] Settings created for new user
- [ ] Update persists correctly

---

## Notes

Single document per user simplifies reads/writes.
