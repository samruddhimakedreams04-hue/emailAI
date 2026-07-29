# Detect Urgent Emails

**Phase:** Phase 7 - Smart Analysis  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Detect urgent emails from inbox using Gemini analysis.

---

## Requirements

- Scan unread or recent emails
- Flag urgency based on keywords, sender, deadlines
- Return list with urgency score and reason

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /ai/analysis/urgent | List urgent emails |

---

## Dependencies

- Prerequisite: Phase 3 (read emails), Phase 4/6 (Gemini)

---

## Implementation Steps

1. Fetch recent/unread emails via Gmail service
2. Analyze each with Gemini urgency prompt
3. Filter and rank by urgency
4. Return structured results

---

## Files to Create/Modify

- `src/services/ai/analysis.service.js`
- `src/controllers/analysis.controller.js`
- `src/routes/analysis.routes.js`

---

## Testing

- [ ] Urgent emails correctly flagged
- [ ] Non-urgent emails excluded or low score

---

## Notes

Feeds Phase 12 urgent email notifications.
