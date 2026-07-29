# Priority Detection

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Assign priority levels (high, medium, low) to emails using Gemini.

---

## Requirements

- Score emails based on content, sender, urgency cues
- Return priority with explanation
- Batch support for inbox triage

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/analysis/priority | Detect email priority |

---

## Dependencies

- Prerequisite: Phase 6 classification, Phase 3

---

## Implementation Steps

1. Classify email context
2. Apply priority scoring prompt
3. Return `{ priority, reason }`

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`

---

## Testing

- [ ] High priority for time-sensitive emails
- [ ] Low priority for newsletters

---

## Notes

Combine with urgent detection for smart inbox sorting in dashboard.
