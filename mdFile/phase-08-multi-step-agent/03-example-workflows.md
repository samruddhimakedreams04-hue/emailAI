# Example Workflows

**Phase:** Phase 8 - Multi-Step Agent  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Document and implement example multi-step agent workflows for testing and demos.

---

## Example Workflows

### 1. Morning inbox triage
```
User: "Summarize my unread emails and star urgent ones"
→ readEmails(unread) → classify each → star urgent → summarize all
```

### 2. Newsletter cleanup
```
User: "Find newsletters from this week, summarize, and archive"
→ searchEmails(newsletter) → summarize → archiveEmail (batch)
```

### 3. Reply assistant
```
User: "Find email from boss about report, draft a reply"
→ searchEmails → readEmail → draftEmail
```

---

## Dependencies

- Prerequisite: Phase 5, 8 workflow orchestration

---

## Implementation Steps

1. Document workflows in this file
2. Create test scripts or Postman collection
3. Verify each workflow end-to-end

---

## Files to Create/Modify

- `mdFile/phase-08-multi-step-agent/03-example-workflows.md` (this file)
- Optional: `tests/workflows/` or `docs/examples/`

---

## Testing

- [ ] Morning triage workflow completes
- [ ] Newsletter cleanup archives correctly
- [ ] Reply assistant creates draft

---

## Notes

Use these as acceptance tests for Phase 8 completion.
