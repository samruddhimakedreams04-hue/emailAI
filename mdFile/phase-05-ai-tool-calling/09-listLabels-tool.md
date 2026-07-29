# listLabels Tool

**Phase:** Phase 5 - AI Tool Calling  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Define AI tool for listing Gmail labels.

---

## Requirements

- Tool name: `listLabels`
- No required parameters
- Execute via Gmail labels service
- Help AI understand user's label organization

---

## Tool Definition

```json
{
  "type": "function",
  "function": {
    "name": "listLabels",
    "description": "List all Gmail labels including inbox, sent, and custom labels",
    "parameters": {
      "type": "object",
      "properties": {}
    }
  }
}
```

---

## Maps To

- Phase 3: [16-list-labels.md](../phase-03-gmail-tools/16-list-labels.md)

---

## Implementation Steps

1. Create `src/tools/listLabels.tool.js`
2. Call `gmailService.listLabels(userId)`
3. Return id and name for each label
4. Register in tool index

---

## Files to Create/Modify

- `src/tools/listLabels.tool.js`
- `src/tools/index.js`

---

## Testing

- [ ] Tool returns system and user labels
- [ ] AI can reference labels in search queries
- [ ] Works without parameters

---

## Notes

Useful when user asks "what labels do I have?" or before organizing emails by label.
