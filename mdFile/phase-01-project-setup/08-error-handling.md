# Error Handling

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Implement global error handling and 404 responses for unknown routes.

---

## Requirements

- 404 handler for unmatched routes
- Global error middleware for uncaught errors
- Consistent JSON error response format
- Log errors using the logger module

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| * | * (unknown) | Returns 404 JSON error |

**404 response example:**

```json
{
  "error": "Not found"
}
```

**500 response example:**

```json
{
  "error": "Internal server error"
}
```

---

## Dependencies

- Prerequisite: [02-express-setup.md](./02-express-setup.md), [04-logger.md](./04-logger.md)

---

## Implementation Steps

1. Add 404 middleware after all routes: `app.use((req, res) => res.status(404).json({ error: 'Not found' }))`
2. Add error middleware with 4 parameters: `(err, req, res, next)`
3. Log error with logger
4. Return 500 with generic message (do not expose stack in production)
5. Register error middleware last

---

## Files to Create/Modify

- `src/app.js`
- Optionally: `src/middleware/errorHandler.js`

---

## Testing

- [ ] Request to unknown route returns 404 JSON
- [ ] Thrown errors in routes return 500 JSON
- [ ] Errors are logged to console/file

---

## Notes

Middleware order: routes → 404 handler → error handler. The error handler must have exactly 4 parameters for Express to recognize it.
