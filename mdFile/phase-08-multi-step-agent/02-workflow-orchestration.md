# Workflow Orchestration

**Phase:** Phase 8 - Multi-Step Agent  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Orchestrate ordered workflow steps: search → read → analyze → act → respond.

---

## Requirements

- Define workflow step types
- Execute steps sequentially with context passing
- Store intermediate results between steps
- Rollback or skip on non-critical failures

---

## Workflow Steps

```
Search → Read → Summarize → Draft Reply → Archive
```

---

## Dependencies

- Prerequisite: [01-agent-overview.md](./01-agent-overview.md)

---

## Implementation Steps

1. Create `src/services/ai/workflow.service.js`
2. Define step registry and execution order
3. Pass output of each step as context to next
4. Integrate with Gemini agent loop

---

## Files to Create/Modify

- `src/services/ai/workflow.service.js`
- `src/services/ai/agent.service.js`

---

## Testing

- [ ] Steps execute in correct order
- [ ] Context passed between steps
- [ ] Failed step reported in final response

---

## Notes

Consider predefined workflows vs fully dynamic agent planning.
