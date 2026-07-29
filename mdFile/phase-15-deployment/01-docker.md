# Docker

**Phase:** Phase 15 - Deployment  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Containerize the Email AI Agent for consistent deployment.

---

## Requirements

- Dockerfile for Node.js app
- docker-compose with optional MongoDB
- `.dockerignore` for node_modules and .env
- Multi-stage build for smaller image

---

## Files to Create

- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`

---

## Implementation Steps

1. Create Dockerfile with Node 20 LTS
2. docker-compose: app + env file mount
3. Document `docker compose up` in README

---

## Testing

- [ ] Image builds successfully
- [ ] Container starts and `/health` responds
- [ ] Connects to MongoDB Atlas or compose MongoDB

---

## Notes

Do not bake secrets into image — use env at runtime.
