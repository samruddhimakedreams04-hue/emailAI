# Extract Action Items

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Extract actionable tasks from email content using Gemini.

---

## Requirements

- Return bullet list of action items
- Include who should act if mentioned
- Support single email or batch analysis

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/analysis/action-items | Extract action items |

---

## Dependencies

- Prerequisite: Phase 3, Phase 4

---

## Implementation Steps

1. Get email content
2. Prompt Gemini for structured action items
3. Return JSON array

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`

---

## Testing

- [ ] Action items match email requests
- [ ] Empty list when no actions found

---

## Notes

Can power daily summary in Phase 12.
