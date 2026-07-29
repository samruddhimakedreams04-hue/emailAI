# Extract Deadlines

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Extract dates and deadlines mentioned in emails using Gemini.

---

## Requirements

- Accept `messageId` or email content
- Return parsed dates with context
- Normalize to ISO date format when possible

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/analysis/deadlines | Extract deadlines from email |

---

## Dependencies

- Prerequisite: Phase 3, Phase 4

---

## Implementation Steps

1. Fetch email content if messageId provided
2. Prompt Gemini to extract deadline phrases
3. Parse and structure response

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`

---

## Testing

- [ ] Deadlines extracted correctly
- [ ] Relative dates ("by Friday") handled

---

## Notes

Useful for calendar integration in future phases.
