# Middleware

**Phase:** Phase 1 - Project Setup  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Configure essential Express middleware for security, CORS, and JSON body parsing.

---

## Requirements

- CORS enabled for API access
- Helmet for security headers
- JSON body parser for POST/PUT requests
- Middleware applied before routes

---

## API / Endpoints

Not applicable for this task.

---

## Dependencies

- npm packages: `cors`, `helmet`, `express` (built-in json parser)
- Prerequisite: [02-express-setup.md](./02-express-setup.md)

---

## Implementation Steps

1. Install packages: `npm install cors helmet`
2. Import cors and helmet in `src/app.js`
3. Apply middleware in order:
   - `app.use(cors())`
   - `app.use(helmet())`
   - `app.use(express.json())`
4. Register middleware before route definitions

---

## Files to Create/Modify

- `src/app.js`
- `package.json`

---

## Testing

- [ ] POST requests with JSON body are parsed correctly
- [ ] Response includes security headers (Helmet)
- [ ] Cross-origin requests are allowed (CORS)

---

## Notes

Middleware order matters. Security and parsing middleware should run before route handlers.
