# WhatsApp Integration

**Phase:** Phase 13 - Integrations  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Send urgent email alerts via WhatsApp Business API.

---

## Requirements

- WhatsApp Business API or Twilio WhatsApp
- Template messages for alerts
- User phone number in settings

---

## Dependencies

- Prerequisite: Phase 12 urgent alerts

---

## Implementation Steps

1. Configure WhatsApp Business API credentials
2. Create whatsapp notification service
3. Send urgent alerts to user's phone

---

## Files to Create/Modify

- `src/services/integrations/whatsapp.service.js`

---

## Testing

- [ ] Urgent alert delivered via WhatsApp
- [ ] Opt-in/opt-out respected

---

## Notes

Requires WhatsApp Business verification for production.
