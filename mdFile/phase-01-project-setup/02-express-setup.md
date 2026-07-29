# Express Setup

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Install Express.js and create the main application instance in `src/app.js`.

---

## Requirements

- Install Express as a dependency
- Create Express app instance
- Export app as default for use in `server.js`
- Keep app configuration separate from server startup

---

## API / Endpoints

Not applicable for this task (routes added in later tasks).

---

## Dependencies

- npm packages: `express`
- Prerequisite: [01-nodejs-setup.md](./01-nodejs-setup.md)

---

## Implementation Steps

1. Install Express: `npm install express`
2. Replace placeholder in `src/app.js` with Express app creation
3. Export the app: `export default app`
4. Import app in `src/server.js` and call `app.listen()`

---

## Files to Create/Modify

- `src/app.js`
- `src/server.js`
- `package.json`

---

## Testing

- [ ] `npm start` starts without import errors
- [ ] Server logs a message indicating it is listening on a port
- [ ] App instance is exported and imported correctly

---

## Notes

Current `src/app.js` contains only a placeholder comment. This is the core file that all routes and middleware attach to.
