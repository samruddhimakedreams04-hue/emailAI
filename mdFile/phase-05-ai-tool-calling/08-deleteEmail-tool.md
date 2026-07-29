# deleteEmail Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Define AI tool for deleting (trashing) emails.

---

## Requirements

- Tool name: `deleteEmail`
- Parameters: messageId
- Default to trash, not permanent delete
- Require explicit user intent for delete actions

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "deleteEmail",
    "description": "Move an email to trash. Use only when user explicitly asks to delete.",
    "parameters": {
      "type": "object",
      "properties": {
        "messageId": { "type": "string", "description": "Gmail message ID to delete" }
      },
      "required": ["messageId"]
    }
  }
}
```

---

## Maps To

- Phase 3: [10-delete-email.md](../phase-03-gmail-tools/10-delete-email.md)

---

## Implementation Steps

1. Create `src/tools/deleteEmail.tool.js`
2. Call `gmailService.deleteEmail` (trash by default)
3. Emphasize confirmation in system prompt
4. Register in tool index

---

## Files to Create/Modify

- `src/tools/deleteEmail.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] Delete only triggered on explicit user request
- [ ] Email moved to trash
- [ ] Agent asks confirmation for ambiguous requests

---

## Notes

High-risk action. Consider requiring confirmation flag or two-step flow in Phase 8 agent.
