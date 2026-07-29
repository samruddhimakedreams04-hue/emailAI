# archiveEmail Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Define AI tool for archiving emails (remove from inbox).

---

## Requirements

- Tool name: `archiveEmail`
- Parameters: messageId (or messageIds for batch)
- Execute via Gmail archive service
- Common in newsletter cleanup workflows

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "archiveEmail",
    "description": "Archive an email by removing it from inbox",
    "parameters": {
      "type": "object",
      "properties": {
        "messageId": { "type": "string", "description": "Gmail message ID to archive" }
      },
      "required": ["messageId"]
    }
  }
}
```

---

## Maps To

- Phase 3: [11-archive-email.md](../phase-03-gmail-tools/11-archive-email.md)

---

## Implementation Steps

1. Create `src/tools/archiveEmail.tool.js`
2. Call `gmailService.archiveEmail(userId, messageId)`
3. Register in tool index
4. Support batch in agent loop (multiple tool calls)

---

## Files to Create/Modify

- `src/tools/archiveEmail.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] "Archive newsletters" workflow archives identified emails
- [ ] Email removed from inbox
- [ ] Batch archive via multiple tool calls works

---

## Notes

Example Phase 8 workflow: search newsletters → summarize → archive each.
