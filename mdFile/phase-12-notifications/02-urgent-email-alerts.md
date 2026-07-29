# Urgent Email Alerts

**Phase:** Phase 12 - Notifications  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Alert user immediately when urgent emails are detected.

---

## Requirements

- Use Phase 7 urgent detection on new emails
- Higher priority notification channel
- User can enable/disable in settings

---

## Dependencies

- Prerequisite: Phase 7 urgent detection, Phase 12 new email alerts

---

## Implementation Steps

1. Run urgency analysis on new emails
2. Send urgent alert if score above threshold
3. Optional: star email automatically

---

## Files to Create/Modify

- `src/services/notifications/urgentAlert.service.js`

---

## Testing

- [ ] Urgent email triggers immediate alert
- [ ] Normal email does not trigger urgent alert

---

## Notes

Define urgency threshold in settings.
