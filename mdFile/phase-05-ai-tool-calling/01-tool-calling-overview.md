# Tool Calling Overview

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Implement the agent loop that lets OpenAI decide which Gmail tool to execute based on user natural language.

---

## Requirements

- Register tools with OpenAI function/tool calling API
- Agent loop: user message → model → tool call → execute → respond
- Support multiple tool calls in one turn if needed
- Return final natural language response to user

---

## API / Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /chat | Enhanced to support tool calling loop |

---

## Agent Loop Flow

1. User sends natural language message
2. Send messages + tool definitions to OpenAI
3. If model returns `tool_calls`, execute each tool
4. Append tool results to messages
5. Call OpenAI again until model returns text response
6. Return final assistant message to user

---

## Dependencies

- Prerequisite: Phase 3 (Gmail tools) and Phase 4 (OpenAI chat) complete

---

## Implementation Steps

1. Create `src/services/ai/agent.service.js` with `runAgent(userId, messages)`
2. Create `src/tools/index.js` — tool registry
3. Pass tools to `chat.completions.create({ tools })`
4. Parse `tool_calls` from response
5. Execute tools via registry, append results
6. Loop until no more tool calls (max iterations limit)
7. Update chat controller to use agent service

---

## Files to Create/Modify

- `src/services/ai/agent.service.js`
- `src/tools/index.js`
- `src/controllers/chat.controller.js`

---

## Testing

- [ ] "Show my unread emails" triggers readEmails tool
- [ ] "Search emails from john" triggers searchEmails tool
- [ ] Multi-step request executes multiple tools in sequence
- [ ] Loop terminates with final text response
- [ ] Max iteration limit prevents infinite loops

---

## Notes

This is the core of the Email AI Agent. Without tool calling, the AI can only chat — not act on Gmail.
