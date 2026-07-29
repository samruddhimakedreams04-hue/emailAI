# Preferred Writing Style

**Phase:** Phase 9 - Memory  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Learn and apply user's preferred writing style for AI-generated emails.

---

## Requirements

- Store style notes (formal, brief, uses greetings, etc.)
- Optional: analyze user's sent emails to infer style
- Inject style into Gemini prompts for replies/drafts

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /memory/writing-style | Get writing style profile |
| PUT | /memory/writing-style | Set writing style manually |

---

## Dependencies

- Prerequisite: Phase 4 prompts, Phase 9 memory

---

## Implementation Steps

1. Store writing style in AiMemory or Settings
2. Add style block to agent/system prompts
3. Optional analyzer on sent mail folder

---

## Files to Create/Modify

- `src/services/memory/writingStyle.service.js`
- `src/services/ai/prompts/agent.js`

---

## Testing

- [ ] Replies match preferred style
- [ ] Manual style override works

---

## Notes

Privacy: only analyze user's own sent emails with consent.
