# Prompt Templates

**Phase:** Phase 4 - Gemini Integration  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Create reusable prompt templates for common email AI tasks, used with Gemini chat.

---

## Requirements

- Templates for: summary, smart reply, rewrite, tone adjustment
- Parameterized placeholders (email content, tone, language)
- Centralized template registry
- Easy to extend for Phase 6 features
- Templates sent to Gemini as user messages (no OpenAI-specific format)

---

## API / Endpoints

Internal templates — used by chat service and future feature endpoints.

---

## Dependencies

- Prerequisite: [03-system-prompt.md](./03-system-prompt.md)

---

## Template Examples

| Template | Purpose |
|----------|---------|
| summarize | Summarize email or thread |
| smartReply | Generate reply based on email content |
| rewrite | Rewrite text with instructions |
| professionalTone | Convert to professional tone |
| friendlyTone | Convert to friendly tone |

---

## Implementation Steps

1. Create `src/services/ai/prompts/templates.js`
2. Define template functions: `(params) => string`
3. Export template registry object
4. Pass generated prompt to Gemini chat service as user message
5. Document parameters for each template

---

## Files to Create/Modify

- `src/services/ai/prompts/templates.js`
- `src/services/ai/chat.service.js`

---

## Testing

- [ ] Each template produces valid prompt string
- [ ] Placeholders replaced with provided params
- [ ] Templates work with Gemini chat API when invoked

---

## Notes

Phase 6 AI Email Features will expose these as user-facing capabilities. Build templates now for reuse with Gemini only.
