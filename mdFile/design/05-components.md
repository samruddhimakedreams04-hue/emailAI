# UI Components

**Category:** Design & Layout  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Related Phase:** Phase 11 - Dashboard  

---

## Objective

Document reusable UI components used across pages.

---

## Components List

### Buttons
| Variant | Usage |
|---------|-------|
| Primary | Main actions (Connect Gmail, Send) |
| Secondary | Cancel, back |
| Ghost | Toolbar actions |
| Danger | Delete email |

### Cards
- Stat card (dashboard): icon, number, label
- Email preview card: subject, from, snippet, date

### Email Row
```
[ ] [★] From Name          Subject line preview...     10:30 AM
```
- Checkbox (bulk select, optional)
- Star indicator
- Unread: bold subject

### Chat Bubble
- User: right-aligned, primary light background
- AI: left-aligned, gray background
- Tools used badge below AI message (small pills)

### Input
- Text input, textarea, search bar with icon
- Chat input: fixed bottom bar with send button

### Badge / Tag
- Unread, Urgent, Newsletter, AI-generated

### Modal
- Confirm delete, disconnect account

### Toast / Alert
- Success, error notifications

### Loading
- Skeleton rows for email list
- Spinner for chat "AI thinking..."

---

## Component File Structure (Future)

```
frontend/src/components/
├── Button.jsx
├── Card.jsx
├── EmailRow.jsx
├── ChatBubble.jsx
├── Sidebar.jsx
└── Header.jsx
```

---

## Related

- [04-color-typography.md](./04-color-typography.md)
- [pages/](./pages/)

---

## Notes

Build components during Phase 11; reference this doc for consistency.
