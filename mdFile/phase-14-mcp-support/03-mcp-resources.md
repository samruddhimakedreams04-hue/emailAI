# MCP Resources

**Phase:** Phase 14 - MCP Support  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Read MCP resources (files, data) and inject into agent context.

---

## Requirements

- List resources from MCP servers
- Fetch resource content on demand
- Include in Gemini context when relevant

---

## Dependencies

- Prerequisite: [01-mcp-client.md](./01-mcp-client.md)

---

## Implementation Steps

1. Implement resource listing in MCP client
2. Fetch resource by URI
3. Pass to agent as context block

---

## Files to Create/Modify

- `src/mcp/resources.js`

---

## Testing

- [ ] Resources listed from MCP server
- [ ] Resource content available to agent

---

## Notes

Resources complement tools for read-only external data.
