# Smart Reply

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Generate an intelligent reply draft based on email content using Gemini.

---

## Requirements

- Accept email content or `messageId`
- Optional tone parameter (professional, friendly)
- Return reply text ready to send or save as draft
- Use `smartReply` template

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/smart-reply | Generate smart reply |

**Body:** `{ "content": "...", "tone": "professional" }`

---

## Dependencies

- Prerequisite: Phase 4 templates, Phase 3 (optional)

---

## Implementation Steps

1. Add handler in `ai.controller.js`
2. Use `smartReply` template with tone param
3. Optionally create Gmail draft via Phase 3 `createDraft`

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Reply matches email context
- [ ] Tone parameter affects output
- [ ] Optional draft creation works

---

## Notes

Consider returning both reply text and optional `draftId` if auto-draft enabled.
