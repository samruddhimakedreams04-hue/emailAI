# Gemini API

**Phase:** Phase 4 - Gemini Integration  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Configure Google Gemini API client for chat completions.

---

## Requirements

- Install Google Gemini SDK (`@google/generative-ai`)
- Load API key from environment
- Create reusable Gemini client/model instance
- Handle missing or invalid API key
- **Gemini only** — do not add OpenAI or other AI providers

---

## API / Endpoints

Not applicable for this task (configuration only).

---

## Dependencies

- npm packages: `@google/generative-ai`
- Prerequisite: Phase 1 complete

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| GEMINI_API_KEY | API key from [Google AI Studio](https://aistudio.google.com/apikey) |
| GEMINI_MODEL | Model name (default: `gemini-2.0-flash`) |

---

## Implementation Steps

1. Install Gemini SDK: `npm install @google/generative-ai`
2. Remove `openai` package if present: `npm uninstall openai`
3. Create `src/config/gemini.js`
4. Initialize client with `process.env.GEMINI_API_KEY`
5. Export `getGeminiModel(systemInstruction)` helper
6. Throw clear error if API key missing when chat is used

---

## Files to Create/Modify

- `src/config/gemini.js`
- `.env`
- `package.json`

---

## Example Config

```javascript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export function getGeminiModel(systemInstruction) {
  return genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
    systemInstruction,
  });
}
```

---

## Testing

- [ ] Client initializes with valid API key
- [ ] Missing API key fails gracefully with clear error
- [ ] Model can be imported by AI chat services

---

## Notes

Never expose API key to frontend. All Gemini calls go through backend only. This project uses **Gemini only** for AI features.
