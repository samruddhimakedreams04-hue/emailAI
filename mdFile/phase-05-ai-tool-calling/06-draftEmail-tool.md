# draftEmail Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Define AI tool for creating email drafts without sending.

---

## Requirements

- Tool name: `draftEmail`
- Parameters: to, subject, body, optional messageId (for reply draft)
- Execute via Gmail draft service
- Safer default than sendEmail for AI-generated content

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "draftEmail",
    "description": "Create an email draft without sending. Use for replies user may want to review.",
    "parameters": {
      "type": "object",
      "properties": {
        "to": { "type": "string" },
        "subject": { "type": "string" },
        "body": { "type": "string" },
        "messageId": { "type": "string", "description": "Optional: reply to this message" }
      },
      "required": ["to", "subject", "body"]
    }
  }
}
```

---

## Maps To

- Phase 3: [08-create-draft.md](../phase-03-gmail-tools/08-create-draft.md)

---

## Implementation Steps

1. Create `src/tools/draftEmail.tool.js`
2. Call `gmailService.createDraft` or reply draft variant
3. Return draft id to model for user reference
4. Register in tool index

---

## Files to Create/Modify

- `src/tools/draftEmail.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] Draft created in Gmail Drafts folder
- [ ] AI informs user draft is ready for review
- [ ] Reply draft links to correct thread when messageId provided

---

## Notes

Prefer draftEmail over sendEmail in agent unless user explicitly says "send it".
