# System Prompt

**Phase:** Phase 4 - Gemini Integration  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Define the AI assistant persona and behavior via a system prompt for Gemini.

---

## Requirements

- Email assistant persona (helpful, professional)
- Instructions for Gmail-related tasks
- Boundaries: confirm before send/delete
- Include context about available capabilities
- Inject via Gemini `systemInstruction` (not as a chat message)

---

## API / Endpoints

Not applicable — internal prompt configuration.

---

## Dependencies

- Prerequisite: [01-gemini-api.md](./01-gemini-api.md)

---

## Implementation Steps

1. Create `src/services/ai/prompts/system.js`
2. Export `SYSTEM_PROMPT` constant
3. Define persona, capabilities, and safety rules
4. Pass to `getGeminiModel(SYSTEM_PROMPT)` on every chat request
5. Version prompt for future updates

---

## Files to Create/Modify

- `src/services/ai/prompts/system.js`
- `src/services/ai/chat.service.js`
- `src/config/gemini.js`

---

## Example System Prompt Themes

- You are an email AI assistant connected to the user's Gmail
- Help read, search, summarize, draft, and organize emails
- Always confirm before sending or deleting emails
- Be concise and actionable

---

## Testing

- [ ] System prompt applied via `systemInstruction` in all chat calls
- [ ] AI responses align with email assistant persona
- [ ] AI refuses harmful or out-of-scope requests appropriately

---

## Notes

System prompt will be extended in Phase 5 when Gemini function calling (tools) is added. Keep prompt modular for easy updates.
