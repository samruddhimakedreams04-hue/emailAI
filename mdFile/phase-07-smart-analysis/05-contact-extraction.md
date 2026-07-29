# Contact Extraction

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Extract contact information (names, emails, phones) from emails.

---

## Requirements

- Parse From, To, Cc, and body signatures
- Return structured contact list
- Deduplicate contacts

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/analysis/contacts | Extract contacts from email |

---

## Dependencies

- Prerequisite: Phase 3, Phase 4

---

## Implementation Steps

1. Combine headers and body for analysis
2. Use Gemini to extract contacts
3. Store optionally in Phase 9 memory

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`

---

## Testing

- [ ] Extracts sender and mentioned contacts
- [ ] Signature blocks parsed correctly

---

## Notes

Supports frequently contacted people in Phase 9.
