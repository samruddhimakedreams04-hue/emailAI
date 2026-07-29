# Microsoft Teams Integration

**Phase:** Phase 13 - Integrations  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Send notifications and summaries to Microsoft Teams channels.

---

## Requirements

- Teams incoming webhook connector
- Format messages as Adaptive Cards
- Configurable in settings

---

## Dependencies

- Prerequisite: Phase 12 notifications

---

## Implementation Steps

1. Create Teams webhook service
2. Format AI summaries for Teams
3. Integrate with notification pipeline

---

## Files to Create/Modify

- `src/services/integrations/teams.service.js`

---

## Testing

- [ ] Message delivered to Teams channel
- [ ] Card formatting renders correctly

---

## Notes

Similar pattern to Slack integration.
