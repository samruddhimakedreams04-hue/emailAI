# Weekly Report

**Phase:** Phase 12 - Notifications  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Send weekly email activity report with stats and insights.

---

## Requirements

- Stats: emails received, sent, archived, top senders
- AI insights on trends
- Deliver every Monday (configurable)

---

## Dependencies

- Prerequisite: Phase 10 email logs, Phase 6/7 AI

---

## Implementation Steps

1. Aggregate EmailLog data for past week
2. Generate report with Gemini
3. Schedule weekly cron job

---

## Files to Create/Modify

- `src/jobs/weeklyReport.job.js`

---

## Testing

- [ ] Report includes accurate counts
- [ ] Delivered on schedule

---

## Notes

Optional premium feature for dashboard users.
