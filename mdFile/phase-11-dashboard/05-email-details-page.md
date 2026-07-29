# Email Details Page

**Phase:** Phase 11 - Dashboard  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

View full email content and perform actions (reply, archive, star, AI features).

---

## Requirements

- Display full email body, headers, attachments
- Action buttons: Reply, Archive, Delete, Star
- AI shortcuts: Summarize, Smart Reply, Classify

---

## Pages / Routes

| Route | Description |
|-------|-------------|
| `/emails/:id` | Single email view |

---

## Dependencies

- Prerequisite: Phase 3, Phase 6 AI features

---

## Implementation Steps

1. Fetch email via `GET /gmail/emails/:id`
2. Render HTML/plain body safely
3. Wire action buttons to Gmail APIs
4. AI feature buttons call Phase 6 `/ai/*` endpoints

---

## Files to Create/Modify

- `frontend/src/pages/EmailDetail.jsx`

---

## Testing

- [ ] Full email renders correctly
- [ ] Archive/reply actions work
- [ ] Summarize button returns summary

---

## Notes

Sanitize HTML email body to prevent XSS.
