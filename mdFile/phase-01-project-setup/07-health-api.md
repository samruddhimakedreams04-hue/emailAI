# Health API

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Provide a health check endpoint to verify the server is running and reachable.

---

## Requirements

- `GET /health` endpoint
- Return JSON with status and message
- No authentication required
- Useful for deployment probes and local testing

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Returns server health status |

**Response example:**

```json
{
  "status": "ok",
  "message": "Email AI Agent is running"
}
```

---

## Dependencies

- Prerequisite: [02-express-setup.md](./02-express-setup.md), [05-middleware.md](./05-middleware.md)

---

## Implementation Steps

1. Add route in `src/app.js` or create `src/routes/health.routes.js`
2. Implement `GET /health` handler
3. Return 200 with JSON body
4. Mount route on app if using separate route file

---

## Files to Create/Modify

- `src/app.js` OR `src/routes/health.routes.js`

---

## Testing

- [ ] `GET http://localhost:3000/health` returns 200
- [ ] Response body contains `"status": "ok"`
- [ ] Endpoint works immediately after server start

---

## Notes

This is the first API endpoint and confirms Phase 1 is working. Use it to validate the server before moving to Phase 2.
