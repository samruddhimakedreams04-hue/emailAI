# Email Signature

**Phase:** Phase 9 - Memory  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Store user email signature and append to AI-generated replies/drafts.

---

## Requirements

- Save signature text (plain or HTML)
- Append to draftEmail and sendEmail tool output
- Editable via settings API

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /memory/signature | Get email signature |
| PUT | /memory/signature | Update signature |

---

## Dependencies

- Prerequisite: Phase 9 preferences, Phase 5 draft/send tools

---

## Implementation Steps

1. Add signature field to Settings model
2. Append signature in email builder when sending/drafting
3. Expose signature endpoints

---

## Files to Create/Modify

- `src/models/Settings.js`
- `src/utils/emailBuilder.js`

---

## Testing

- [ ] Signature appended to drafts
- [ ] Update signature reflects in new emails

---

## Notes

Allow user to disable auto-append via preference.
