# GitHub Actions CI/CD

**Phase:** Phase 15 - Deployment  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Automate testing and deployment with GitHub Actions.

---

## Requirements

- Run on push to main and pull requests
- Steps: install, lint (optional), smoke test
- Deploy to Railway/Render on merge to main
- Secrets stored in GitHub repository secrets

---

## Workflow Example

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test # if tests exist
```

---

## Files to Create

- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml` (optional)

---

## Implementation Steps

1. Create CI workflow for install and basic checks
2. Add deploy workflow with Railway/Render CLI or webhook
3. Store secrets in GitHub Settings

---

## Testing

- [ ] CI runs on push
- [ ] Failed build blocks merge
- [ ] Deploy triggers on main merge

---

## Notes

Start with CI only; add CD when production environment is ready.
