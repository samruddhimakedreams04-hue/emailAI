# Professional Tone

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Convert email text to a professional tone using Gemini.

---

## Requirements

- Accept email `content`
- Use `professionalTone` template
- Preserve meaning while improving formality

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/tone/professional | Convert to professional tone |

---

## Dependencies

- Prerequisite: Phase 4 templates

---

## Implementation Steps

1. Add endpoint under `/ai/tone/professional`
2. Call Gemini with professionalTone template

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Output is more formal than input
- [ ] Core message preserved

---

## Notes

Pair with friendly tone endpoint for tone switching.
