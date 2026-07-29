# Grammar Fix

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Fix grammar and spelling in email text using Gemini.

---

## Requirements

- Accept email `content`
- Use `grammarFix` template
- Return corrected text only (no explanations)

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/grammar-fix | Fix grammar and spelling |

---

## Dependencies

- Prerequisite: Phase 4 templates

---

## Implementation Steps

1. Add grammar-fix endpoint
2. Call Gemini with grammarFix template
3. Return cleaned text

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Grammar errors corrected
- [ ] Returns text only without commentary

---

## Notes

Can be combined with rewrite/tone endpoints in UI workflow.
