# Subject Generator

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Generate email subject line suggestions from body content using Gemini.

---

## Requirements

- Accept email `content`
- Use `subjectGenerator` template
- Return 3 subject line suggestions

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/subject | Generate subject lines |

---

## Dependencies

- Prerequisite: Phase 4 templates

---

## Implementation Steps

1. Add subject generator endpoint
2. Parse Gemini response into array of suggestions
3. Return structured JSON list

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Returns multiple subject suggestions
- [ ] Suggestions match email content

---

## Notes

Useful when composing new emails in dashboard UI.
