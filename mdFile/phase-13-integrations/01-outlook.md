# Outlook Integration

**Phase:** Phase 13 - Integrations  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Medium  

---

## Objective

Connect Microsoft Outlook/Office 365 email alongside Gmail.

---

## Requirements

- Microsoft OAuth 2.0 (Azure AD)
- Read/send via Microsoft Graph API
- Unified account model with provider field

---

## Dependencies

- Prerequisite: Phase 2 auth pattern, Phase 3 email service abstraction

---

## Implementation Steps

1. Register app in Azure Portal
2. Create `src/services/outlook/outlook.service.js`
3. Extend OAuthToken model with `provider: 'outlook'`
4. Add Outlook routes mirroring Gmail

---

## Files to Create/Modify

- `src/config/microsoft.js`
- `src/services/outlook/outlook.service.js`

---

## Testing

- [ ] Outlook OAuth connect works
- [ ] Read/send emails via Graph API

---

## Notes

Abstract email provider interface for Gmail + Outlook.
