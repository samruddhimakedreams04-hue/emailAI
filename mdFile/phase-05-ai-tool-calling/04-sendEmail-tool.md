# sendEmail Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Define AI tool for sending new emails via Gmail.

---

## Requirements

- Tool name: `sendEmail`
- Parameters: to, subject, body
- Require user confirmation before send (agent or UI)
- Execute via Gmail send service

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "sendEmail",
    "description": "Send a new email. Use only when user explicitly asks to send.",
    "parameters": {
      "type": "object",
      "properties": {
        "to": { "type": "string", "description": "Recipient email address" },
        "subject": { "type": "string", "description": "Email subject" },
        "body": { "type": "string", "description": "Email body text" }
      },
      "required": ["to", "subject", "body"]
    }
  }
}
```

---

## Maps To

- Phase 3: [05-send-email.md](../phase-03-gmail-tools/05-send-email.md)

---

## Implementation Steps

1. Create `src/tools/sendEmail.tool.js`
2. Validate email addresses before send
3. Consider confirmation step in agent loop for destructive/sensitive actions
4. Call `gmailService.sendEmail`
5. Register in tool index

---

## Files to Create/Modify

- `src/tools/sendEmail.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] Send tool called only when user requests send
- [ ] Email delivered successfully
- [ ] Invalid recipient handled with error message to model

---

## Notes

Safety: system prompt and tool description should emphasize confirming with user before sending.
