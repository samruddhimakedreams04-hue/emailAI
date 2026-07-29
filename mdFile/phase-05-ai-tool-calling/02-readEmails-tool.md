# readEmails Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Define AI tool for reading unread or latest emails, mapped to Gmail service.

---

## Requirements

- Tool name: `readEmails`
- Parameters: type (unread/latest), maxResults
- Execute via Gmail service list methods
- Return formatted email list to model

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "readEmails",
    "description": "Read unread or latest emails from the user's inbox",
    "parameters": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": ["unread", "latest"],
          "description": "Type of emails to read"
        },
        "maxResults": {
          "type": "number",
          "description": "Maximum number of emails to return",
          "default": 10
        }
      },
      "required": ["type"]
    }
  }
}
```

---

## Maps To

- Phase 3: [01-read-unread-emails.md](../phase-03-gmail-tools/01-read-unread-emails.md)
- Phase 3: [02-read-latest-emails.md](../phase-03-gmail-tools/02-read-latest-emails.md)

---

## Implementation Steps

1. Create `src/tools/readEmails.tool.js`
2. Export tool schema and execute function
3. Execute calls `gmailService.listUnreadEmails` or `listLatestEmails`
4. Return JSON string result for model
5. Register in `src/tools/index.js`

---

## Files to Create/Modify

- `src/tools/readEmails.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] "Show unread emails" invokes readEmails with type unread
- [ ] Tool returns id, subject, from, snippet for each email
- [ ] maxResults parameter respected

---

## Notes

Keep tool results concise — truncate long snippets to avoid token limits.
