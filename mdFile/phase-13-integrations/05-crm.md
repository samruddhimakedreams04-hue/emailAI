# CRM Integration

**Phase:** Phase 13 - Integrations  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Sync contacts and email interactions with CRM (HubSpot, Salesforce, etc.).

---

## Requirements

- Create/update contacts from Phase 7 extraction
- Log email interactions as CRM activities
- Configurable CRM provider

---

## Dependencies

- Prerequisite: Phase 7 contact/company extraction

---

## Implementation Steps

1. Choose CRM API (e.g. HubSpot)
2. Create `src/services/integrations/crm.service.js`
3. Sync on send/receive events

---

## Files to Create/Modify

- `src/services/integrations/crm.service.js`

---

## Testing

- [ ] Contact created in CRM from email
- [ ] Email activity logged

---

## Notes

Start with one CRM provider; abstract for others later.
