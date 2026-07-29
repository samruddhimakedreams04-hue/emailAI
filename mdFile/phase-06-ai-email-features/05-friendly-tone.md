# Friendly Tone

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Convert email text to a friendly, warm tone using Gemini.

---

## Requirements

- Accept email `content`
- Use `friendlyTone` template
- Keep message clear and approachable

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/tone/friendly | Convert to friendly tone |

---

## Dependencies

- Prerequisite: Phase 4 templates

---

## Implementation Steps

1. Add endpoint under `/ai/tone/friendly`
2. Call Gemini with friendlyTone template

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Output is warmer than input
- [ ] Still appropriate for email context

---

## Notes

Useful for customer support or personal outreach emails.
