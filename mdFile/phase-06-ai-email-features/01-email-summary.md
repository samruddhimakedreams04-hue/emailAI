# Email Summary

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Expose a dedicated API to summarize email content using Gemini.

---

## Requirements

- Accept raw email content or Gmail `messageId`
- Use `summarize` prompt template from Phase 4
- Return bullet-point summary with action items
- Require authentication

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/summary | Summarize email content |

**Body:** `{ "content": "..." }` or `{ "messageId": "..." }`

---

## Dependencies

- Prerequisite: Phase 4 (Gemini), Phase 3 (optional for messageId)
- Reuse: `src/services/ai/prompts/templates.js` → `summarize`

---

## Implementation Steps

1. Create `src/controllers/ai.controller.js`
2. Create `src/routes/ai.routes.js`
3. Fetch email by ID if `messageId` provided
4. Call Gemini with summarize template
5. Mount routes in `src/app.js`

---

## Files to Create/Modify

- `src/routes/ai.routes.js`
- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Summary returns bullet points
- [ ] Works with raw content and messageId
- [ ] Returns 401 without auth

---

## Notes

Phase 4 templates already exist — Phase 6 adds dedicated endpoints for frontend/UI use.
