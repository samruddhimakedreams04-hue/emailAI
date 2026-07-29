# Environment Variables

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Load configuration from environment variables using dotenv and a `.env` file.

---

## Requirements

- Use `dotenv` to load variables from `.env`
- Copy `.env.example` to `.env` for local development
- Read `PORT` with fallback to 3000
- Never commit `.env` to version control

---

## API / Endpoints

Not applicable for this task.

---

## Dependencies

- npm packages: `dotenv`
- Prerequisite: [01-nodejs-setup.md](./01-nodejs-setup.md)

---

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| PORT | No | 3000 | Server port |

---

## Implementation Steps

1. Install dotenv: `npm install dotenv`
2. Add `import 'dotenv/config'` at top of `src/server.js`
3. Copy `.env.example` to `.env`
4. Set `PORT=3000` in `.env`
5. Use `process.env.PORT || 3000` in server startup

---

## Files to Create/Modify

- `src/server.js`
- `.env` (create from `.env.example`)
- `.env.example` (already exists)
- `package.json`

---

## Testing

- [ ] Server starts on port defined in `.env`
- [ ] Server falls back to 3000 when PORT is unset
- [ ] `.env` is listed in `.gitignore`

---

## Notes

`.env.example` already defines variables for later phases (OpenAI, Google OAuth, JWT, MongoDB). Only `PORT` is needed for Phase 1.
