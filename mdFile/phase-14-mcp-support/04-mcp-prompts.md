# MCP Prompts

**Phase:** Phase 14 - MCP Support  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Use MCP server-provided prompts as reusable templates.

---

## Requirements

- List prompts from MCP servers
- Invoke MCP prompt with arguments
- Integrate with chat/agent flow

---

## Dependencies

- Prerequisite: [01-mcp-client.md](./01-mcp-client.md)

---

## Implementation Steps

1. Implement prompt discovery in MCP client
2. Expose via API or merge with Phase 4 templates
3. Execute MCP prompt and return result

---

## Files to Create/Modify

- `src/mcp/prompts.js`

---

## Testing

- [ ] MCP prompts listed
- [ ] Prompt execution returns result

---

## Notes

MCP prompts may replace or extend local Gemini templates.
