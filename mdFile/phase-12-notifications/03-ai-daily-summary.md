# AI Daily Summary

**Phase:** Phase 12 - Notifications  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Send daily AI-generated inbox summary to user at scheduled time.

---

## Requirements

- Cron job at user-preferred time
- Summarize unread and important emails from last 24h
- Deliver via email or in-app notification

---

## Dependencies

- Prerequisite: Phase 6 summary, Phase 7 analysis

---

## Implementation Steps

1. Create `src/jobs/dailySummary.job.js`
2. Fetch recent emails, run Gemini summary
3. Send summary via notification or email

---

## Files to Create/Modify

- `src/jobs/dailySummary.job.js`

---

## Testing

- [ ] Summary generated at scheduled time
- [ ] Content reflects day's emails

---

## Notes

Use node-cron or external scheduler (Railway cron, etc.).
