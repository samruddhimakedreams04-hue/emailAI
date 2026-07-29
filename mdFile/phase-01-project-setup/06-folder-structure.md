# Folder Structure

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Create the standard project folder structure for scalable backend development.

---

## Requirements

- Separate concerns: config, routes, controllers, services, middleware, utils
- Placeholder files or `.gitkeep` in empty directories
- Follow conventions used in later phases

---

## API / Endpoints

Not applicable for this task.

---

## Dependencies

- Prerequisite: [02-express-setup.md](./02-express-setup.md)

---

## Target Structure

```
src/
├── config/          # Environment and service config
├── middleware/      # Custom middleware (auth, validation)
├── routes/          # Route definitions
├── controllers/     # Request handlers
├── services/        # Business logic (gmail, ai, auth)
├── utils/           # Logger, helpers
├── app.js
└── server.js
```

---

## Implementation Steps

1. Create directories under `src/`: config, middleware, routes, controllers, services, utils
2. Add `src/utils/logger.js` (see 04-logger.md)
3. Optionally add index files or `.gitkeep` in empty folders
4. Document structure in project README if desired

---

## Files to Create/Modify

- `src/config/`
- `src/middleware/`
- `src/routes/`
- `src/controllers/`
- `src/services/`
- `src/utils/`

---

## Testing

- [ ] All directories exist under `src/`
- [ ] Imports from new paths resolve correctly
- [ ] No broken references after reorganization

---

## Notes

Subfolders like `src/services/gmail/` and `src/services/ai/` will be added in Phases 3–5. Phase 1 establishes the base layout only.
