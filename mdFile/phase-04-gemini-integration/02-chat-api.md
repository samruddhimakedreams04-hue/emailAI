# Chat API

**Phase:** Phase 4 - Gemini Integration  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Expose a chat endpoint that sends user messages to Gemini and returns AI responses.

---

## Requirements

- `POST /chat` accepts messages array
- Support multi-turn conversation
- Return assistant message content
- Require authentication (JWT)
- Use Gemini `generateContent` or `startChat`

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /chat | Send chat message, get Gemini AI response |

**Body:**

```json
{
  "messages": [
    { "role": "user", "content": "Summarize my unread emails" }
  ]
}
```

**Response:**

```json
{
  "message": {
    "role": "assistant",
    "content": "AI response text"
  }
}
```

---

## Role Mapping (Gemini)

| Client role | Gemini role |
|-------------|-------------|
| user | user |
| assistant | model |
| system | use `systemInstruction` in model config (not in messages) |

---

## Dependencies

- Prerequisite: [01-gemini-api.md](./01-gemini-api.md), [03-system-prompt.md](./03-system-prompt.md)

---

## Implementation Steps

1. Create `src/services/ai/chat.service.js`
2. Create `src/routes/chat.routes.js` and controller
3. Pass system prompt via Gemini `systemInstruction`
4. Map message history to Gemini format (`user` / `model`)
5. Call `model.generateContent()` or `model.startChat().sendMessage()`
6. Return assistant text from response
7. Protect route with auth middleware

---

## Files to Create/Modify

- `src/services/ai/chat.service.js`
- `src/routes/chat.routes.js`
- `src/controllers/chat.controller.js`
- `src/app.js`

---

## Testing

- [ ] POST /chat returns Gemini AI response
- [ ] Multi-turn messages maintain context in request
- [ ] Invalid body returns 400
- [ ] Unauthenticated request returns 401

---

## Notes

Default model: `gemini-2.0-flash`. Configure via `GEMINI_MODEL` in `.env`. Do not use OpenAI or other providers.
