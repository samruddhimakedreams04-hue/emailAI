# Email Classification

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Classify emails into categories (urgent, newsletter, work, etc.) using Gemini.

---

## Requirements

- Accept `content` or `messageId`
- Use `classification` template
- Return category and brief reason
- Categories: urgent, newsletter, personal, work, spam, other

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/classify | Classify email |

---

## Dependencies

- Prerequisite: Phase 4 templates, Phase 3 (optional)

---

## Implementation Steps

1. Add classify endpoint
2. Parse category from Gemini response
3. Return `{ category, reason }` JSON

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Returns valid category
- [ ] Includes explanation
- [ ] Works with messageId fetch

---

## Notes

Foundation for Phase 7 smart analysis and auto-labeling workflows.
