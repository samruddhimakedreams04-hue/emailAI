# New Email Alerts

**Phase:** Phase 12 - Notifications  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Notify user when new emails arrive in connected Gmail account.

---

## Requirements

- Poll Gmail periodically or use push notifications (Pub/Sub)
- Send in-app, email, or push notification
- Configurable in settings

---

## API / Endpoints

Internal background job — optional webhook for Pub/Sub.

---

## Dependencies

- Prerequisite: Phase 3 Gmail, Phase 11 settings

---

## Implementation Steps

1. Create `src/jobs/emailWatcher.job.js`
2. Poll `listUnreadEmails` on interval or Gmail Pub/Sub
3. Trigger notification service when new mail detected

---

## Files to Create/Modify

- `src/jobs/emailWatcher.job.js`
- `src/services/notifications/notification.service.js`

---

## Testing

- [ ] New email triggers alert
- [ ] Duplicate alerts prevented

---

## Notes

Gmail Pub/Sub is preferred over polling for production.
