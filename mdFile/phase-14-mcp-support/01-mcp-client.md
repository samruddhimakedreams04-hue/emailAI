# MCP Client

**Phase:** Phase 14 - MCP Support  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Implement Model Context Protocol (MCP) client to connect external tool servers.

---

## Requirements

- MCP client library integration
- Connect to configured MCP servers
- Discover tools and resources from servers

---

## Dependencies

- Prerequisite: Phase 5 tool calling architecture

---

## Implementation Steps

1. Install MCP SDK/client package
2. Create `src/mcp/client.js`
3. Configure server URLs in environment
4. Initialize on app startup

---

## Files to Create/Modify

- `src/mcp/client.js`
- `src/config/mcp.js`

---

## Testing

- [ ] Client connects to MCP server
- [ ] Tools discovered from server

---

## Notes

MCP enables extending agent with third-party tools beyond Gmail.
