# searchEmails Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Define AI tool for searching emails using Gmail query syntax.

---

## Requirements

- Tool name: `searchEmails`
- Parameters: query (Gmail q syntax), maxResults
- Execute via Gmail search service
- Return matching email list

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "searchEmails",
    "description": "Search emails using Gmail search query syntax",
    "parameters": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Gmail search query e.g. from:john@example.com is:unread"
        },
        "maxResults": {
          "type": "number",
          "default": 10
        }
      },
      "required": ["query"]
    }
  }
}
```

---

## Maps To

- Phase 3: [03-search-emails.md](../phase-03-gmail-tools/03-search-emails.md)

---

## Implementation Steps

1. Create `src/tools/searchEmails.tool.js`
2. Export schema and execute function
3. Call `gmailService.searchEmails(userId, query, options)`
4. Register in tool index

---

## Files to Create/Modify

- `src/tools/searchEmails.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] "Find emails from boss" generates valid Gmail query
- [ ] Search results returned to model
- [ ] Empty results handled gracefully

---

## Notes

AI may construct queries like `newer_than:1d is:unread`. Document common patterns in tool description.
