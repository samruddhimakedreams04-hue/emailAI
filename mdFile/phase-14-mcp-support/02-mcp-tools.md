# MCP Tools

**Phase:** Phase 14 - MCP Support  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Expose and invoke MCP tools alongside Gmail tools in the agent.

---

## Requirements

- Register MCP tools in agent tool registry
- Route tool calls to MCP client when not Gmail tool
- Unified tool interface for Gemini

---

## Dependencies

- Prerequisite: [01-mcp-client.md](./01-mcp-client.md), Phase 5

---

## Implementation Steps

1. Extend `src/tools/index.js` with MCP tool loader
2. Merge MCP + Gmail tool declarations for Gemini
3. Execute MCP tools via client

---

## Files to Create/Modify

- `src/tools/index.js`
- `src/mcp/tools.js`

---

## Testing

- [ ] MCP tool callable from agent
- [ ] Gmail and MCP tools work together

---

## Notes

Agent can use Gmail + external MCP tools in one conversation.
