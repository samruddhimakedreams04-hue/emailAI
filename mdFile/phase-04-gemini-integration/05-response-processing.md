# Response Processing

**Phase:** Phase 4 - Gemini Integration  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Parse, validate, and format Gemini API responses with proper error handling.

---

## Requirements

- Extract assistant text from Gemini response (`response.text()`)
- Handle API errors (quota exceeded, invalid key, safety blocks)
- Optional streaming support for real-time responses
- Consistent response format for frontend

---

## API / Endpoints

Applies to `POST /chat` response handling.

---

## Dependencies

- Prerequisite: [02-chat-api.md](./02-chat-api.md)

---

## Implementation Steps

1. Create `src/services/ai/responseProcessor.js`
2. Extract text via `result.response.text()`
3. Map Gemini errors to HTTP status codes
4. Log errors with logger
5. Return standardized `{ message, usage? }` format
6. Optional: implement streaming with Gemini `generateContentStream`

---

## Error Handling

| Gemini Error | HTTP Status |
|--------------|-------------|
| Invalid API key | 500 (config error) |
| Quota / rate limit | 429 |
| Timeout | 504 |
| Invalid request | 400 |
| Safety block (no content) | 400 |

---

## Files to Create/Modify

- `src/services/ai/responseProcessor.js`
- `src/services/ai/chat.service.js`

---

## Testing

- [ ] Valid response returns parsed assistant message
- [ ] Quota/rate limit error returns 429 with message
- [ ] Empty or blocked response handled gracefully
- [ ] Streaming emits chunks correctly (if implemented)

---

## Notes

Streaming improves UX for long summaries. Can be added as enhancement after basic Gemini chat works.
