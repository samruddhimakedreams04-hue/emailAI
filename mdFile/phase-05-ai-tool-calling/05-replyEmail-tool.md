# replyEmail Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Define AI tool for replying to an existing email.

---

## Requirements

- Tool name: `replyEmail`
- Parameters: messageId, body
- Execute via Gmail reply service
- Maintain thread context

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "replyEmail",
    "description": "Reply to an existing email by message ID",
    "parameters": {
      "type": "object",
      "properties": {
        "messageId": { "type": "string", "description": "Gmail message ID to reply to" },
        "body": { "type": "string", "description": "Reply body text" }
      },
      "required": ["messageId", "body"]
    }
  }
}
```

---

## Maps To

- Phase 3: [06-reply-email.md](../phase-03-gmail-tools/06-reply-email.md)

---

## Implementation Steps

1. Create `src/tools/replyEmail.tool.js`
2. Call `gmailService.replyEmail(userId, messageId, body)`
3. Register in tool index
4. Often used after readEmails/searchEmails provides messageId

---

## Files to Create/Modify

- `src/tools/replyEmail.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] Reply sent in correct thread
- [ ] Works with messageId from prior read/search tool call
- [ ] Invalid messageId returns error to model

---

## Notes

Typical flow: readEmails → AI drafts reply → replyEmail. Consider draftEmail for approval first.
