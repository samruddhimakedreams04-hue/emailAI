# Slack Integration

**Phase:** Phase 13 - Integrations  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Send email alerts and AI summaries to Slack channels.

---

## Requirements

- Slack OAuth or webhook URL
- Post urgent alerts and daily summaries to channel
- User configures channel in settings

---

## Dependencies

- Prerequisite: Phase 12 notifications

---

## Implementation Steps

1. Add Slack webhook/OAuth config
2. Create `src/services/integrations/slack.service.js`
3. Call from notification service

---

## Files to Create/Modify

- `src/services/integrations/slack.service.js`

---

## Testing

- [ ] Test message posts to Slack
- [ ] Urgent alert appears in configured channel

---

## Notes

Webhook is simpler; OAuth for multi-workspace apps.
