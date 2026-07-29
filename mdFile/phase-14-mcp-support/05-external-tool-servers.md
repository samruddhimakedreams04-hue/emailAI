# External Tool Servers

**Phase:** Phase 14 - MCP Support  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Configure and manage connections to multiple external MCP tool servers.

---

## Requirements

- Config file or env for MCP server list
- Health check each server on startup
- Graceful fallback if server unavailable

---

## Environment Variables

```env
MCP_SERVERS=http://localhost:3001,https://other-mcp-server.com
```

---

## Dependencies

- Prerequisite: Phase 14 MCP client

---

## Implementation Steps

1. Parse MCP_SERVERS from env
2. Connect to each server in parallel
3. Aggregate tools/resources/prompts
4. Log connection status

---

## Files to Create/Modify

- `src/config/mcp.js`
- `src/mcp/client.js`

---

## Testing

- [ ] Multiple servers connected
- [ ] Failed server does not crash app

---

## Notes

Document how to run local MCP servers for development.
