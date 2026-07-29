# User Preferences

**Phase:** Phase 9 - Memory  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Store and apply user preferences for AI behavior.

---

## Requirements

- Preferences: default tone, language, max emails per request
- CRUD API for preferences
- Inject preferences into Gemini system prompt

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /memory/preferences | Get user preferences |
| PUT | /memory/preferences | Update preferences |

---

## Dependencies

- Prerequisite: Phase 10 Settings collection

---

## Implementation Steps

1. Create Settings model fields for preferences
2. Load preferences in chat/agent services
3. Expose GET/PUT endpoints

---

## Files to Create/Modify

- `src/models/Settings.js`
- `src/services/memory/preferences.service.js`

---

## Testing

- [ ] Preferences saved and retrieved
- [ ] Chat behavior reflects preferences

---

## Notes

Example: `{ "tone": "professional", "language": "en" }`
