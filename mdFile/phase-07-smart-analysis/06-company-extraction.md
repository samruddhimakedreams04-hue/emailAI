# Company Extraction

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Extract company/organization names from email content and domains.

---

## Requirements

- Infer company from email domain and body
- Return company name and confidence
- Useful for CRM-style grouping

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/analysis/companies | Extract company info |

---

## Dependencies

- Prerequisite: Phase 3, Phase 4

---

## Implementation Steps

1. Analyze sender domain and email body
2. Prompt Gemini for company identification
3. Return structured result

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`

---

## Testing

- [ ] Company inferred from corporate domains
- [ ] Handles personal email domains gracefully

---

## Notes

Optional CRM integration in Phase 13.
