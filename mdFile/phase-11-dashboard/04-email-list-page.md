# Email List Page

**Phase:** Phase 11 - Dashboard  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** High  

---

## Objective

Browse inbox emails with filters (unread, latest, search).

---

## Requirements

- List view with subject, from, date, read status
- Tabs: Inbox, Unread, Starred
- Search bar using Gmail query API
- Pagination

---

## Pages / Routes

| Route | Description |
|-------|-------------|
| `/emails` | Email list view |

---

## Dependencies

- Prerequisite: Phase 3 Gmail read/search APIs

---

## Implementation Steps

1. Fetch emails from `/gmail/emails/unread`, `/latest`, `/search`
2. Table or card list UI
3. Click row → email details page

---

## Files to Create/Modify

- `frontend/src/pages/EmailList.jsx`

---

## Testing

- [ ] Unread filter works
- [ ] Search returns results
- [ ] Pagination loads more emails

---

## Notes

Mirror familiar Gmail inbox UX.
