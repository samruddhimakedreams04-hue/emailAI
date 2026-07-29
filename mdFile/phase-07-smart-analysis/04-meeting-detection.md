# Meeting Detection

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Detect meeting requests and calendar invites in emails using Gemini.

---

## Requirements

- Identify meeting proposals, Zoom/Teams links
- Extract date, time, participants if present
- Return structured meeting metadata

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/analysis/meetings | Detect meetings in email |

---

## Dependencies

- Prerequisite: Phase 3, Phase 4

---

## Implementation Steps

1. Analyze email body and headers
2. Extract meeting details via Gemini
3. Return `{ isMeeting, details }`

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`

---

## Testing

- [ ] Detects calendar invite emails
- [ ] Extracts proposed meeting times from text

---

## Notes

Future: link to Google Calendar in Phase 13.
