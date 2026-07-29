# Logger

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Set up structured logging with Winston or Pino for request tracking and error reporting.

---

## Requirements

- Centralized logger module
- Log levels: error, warn, info, debug
- Timestamp and level in log output
- Use logger in server startup and error handlers

---

## API / Endpoints

Not applicable for this task.

---

## Dependencies

- npm packages: `winston` OR `pino`
- Prerequisite: [06-folder-structure.md](./06-folder-structure.md) (utils folder)

---

## Implementation Steps

1. Install logger: `npm install winston` (or `pino`)
2. Create `src/utils/logger.js`
3. Configure log format (timestamp, level, message)
4. Export logger instance
5. Replace `console.log` / `console.error` with logger in server and middleware

---

## Files to Create/Modify

- `src/utils/logger.js`
- `src/server.js`
- `package.json`

---

## Testing

- [ ] Server startup logs an info message with port number
- [ ] Error handler logs errors at error level
- [ ] Logger module exports a reusable instance

---

## Notes

Winston is more feature-rich; Pino is faster. Either is acceptable for this project. Choose one and use it consistently.
