# Agent Overview

**Phase:** Phase 8 - Multi-Step Agent  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Extend Phase 5 agent to run autonomous multi-step email workflows from a single user request.

---

## Requirements

- Chain multiple tool calls across turns
- Plan steps before execution (optional planning prompt)
- Handle partial failures gracefully
- Max iteration limit for safety

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /agent/run | Run multi-step autonomous workflow |

---

## Dependencies

- Prerequisite: Phase 5 (tool calling), Phase 3, Phase 4

---

## Implementation Steps

1. Enhance `src/services/ai/agent.service.js`
2. Add workflow planning to system prompt
3. Support longer iteration chains with checkpoints
4. Log each step for debugging

---

## Files to Create/Modify

- `src/services/ai/agent.service.js`
- `src/services/ai/prompts/agent.js`

---

## Testing

- [ ] Single request triggers multiple tools
- [ ] Agent stops after max iterations
- [ ] Final summary explains actions taken

---

## Notes

Example: "Find unread newsletters, summarize, archive them" — search → read → summarize → archive.
