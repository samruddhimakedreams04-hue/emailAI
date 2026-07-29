# Translation

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Translate email content to a target language using Gemini.

---

## Requirements

- Accept `content` and `language` (target language)
- Use `translation` template
- Return translated text

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/translate | Translate email text |

**Body:** `{ "content": "...", "language": "Spanish" }`

---

## Dependencies

- Prerequisite: Phase 4 templates

---

## Implementation Steps

1. Add translate endpoint
2. Validate language parameter
3. Call Gemini with translation template

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Translation matches target language
- [ ] Missing language returns 400

---

## Notes

Gemini supports many languages — document supported languages in API docs.
