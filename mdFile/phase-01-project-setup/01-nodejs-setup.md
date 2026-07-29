# Node.js Setup

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Configure Node.js as the runtime foundation with ES modules and npm scripts for development and production.

---

## Requirements

- Node.js LTS (v18 or v20 recommended)
- `"type": "module"` in package.json for ES module syntax
- `start` script for production (`node src/server.js`)
- `dev` script for development with auto-reload

---

## API / Endpoints

Not applicable for this task.

---

## Dependencies

- Node.js (system)
- nodemon (dev) — for `npm run dev`

---

## Implementation Steps

1. Verify Node.js is installed: `node --version`
2. Ensure `package.json` has `"type": "module"`
3. Add scripts:
   - `"start": "node src/server.js"`
   - `"dev": "nodemon src/server.js"`
4. Install nodemon as dev dependency: `npm install -D nodemon`

---

## Files to Create/Modify

- `package.json`

---

## Testing

- [ ] `node --version` returns v18+ or v20+
- [ ] `npm start` runs without module syntax errors
- [ ] `npm run dev` starts nodemon and watches for file changes

---

## Notes

Current `package.json` has scripts but no dependencies. The project uses ES modules (`import`/`export`), not CommonJS (`require`).
