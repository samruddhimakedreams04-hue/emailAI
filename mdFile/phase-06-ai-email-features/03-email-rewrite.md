# Email Rewrite

**Phase:** Phase 6 - AI Email Features  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Rewrite email text based on user instructions using Gemini.

---

## Requirements

- Accept `content` and `instructions`
- Use `rewrite` template
- Return rewritten text only

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /ai/rewrite | Rewrite email text |

**Body:** `{ "content": "...", "instructions": "make it shorter" }`

---

## Dependencies

- Prerequisite: Phase 4 templates

---

## Implementation Steps

1. Add rewrite endpoint in AI routes
2. Validate content and instructions
3. Call Gemini with rewrite template

---

## Files to Create/Modify

- `src/controllers/ai.controller.js`
- `src/services/ai/features.service.js`

---

## Testing

- [ ] Rewritten text follows instructions
- [ ] Missing instructions returns 400

---

## Notes

Useful for polishing drafts before send.
