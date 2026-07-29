# Google Calendar Integration

**Phase:** Phase 13 - Integrations  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Create calendar events from meeting detection in emails.

---

## Requirements

- Google Calendar API OAuth (may share Google OAuth scopes)
- Create events from Phase 7 meeting detection
- Optional: show calendar conflicts in reply suggestions

---

## Dependencies

- Prerequisite: Phase 7 meeting detection, Phase 2 Google OAuth

---

## Implementation Steps

1. Add Calendar API scope to OAuth
2. Create `src/services/calendar/calendar.service.js`
3. Create event from extracted meeting details

---

## Files to Create/Modify

- `src/services/calendar/calendar.service.js`

---

## Testing

- [ ] Event created from meeting email
- [ ] Correct date/time in calendar

---

## Notes

Extend existing Google OAuth with `calendar.events` scope.
