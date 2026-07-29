# Email AI Agent - Task Documentation

## Project Goal

Build a production-ready AI Email Agent that can understand natural language, choose the correct email tool automatically, perform the requested action, and respond intelligently.

---

## Status Overview

| Phase | Name | Tasks | Code | Docs |
|-------|------|-------|------|------|
| 1 | [Project Setup](./phase-01-project-setup/) | 8 | Done | Done |
| 2 | [Authentication](./phase-02-authentication/) | 6 | Done | Done |
| 3 | [Gmail Tools](./phase-03-gmail-tools/) | 17 | Done | Done |
| 4 | [Gemini Integration](./phase-04-gemini-integration/) | 5 | Done | Done |
| 5 | [AI Tool Calling](./phase-05-ai-tool-calling/) | 9 | Done | Done |
| 6 | [AI Email Features](./phase-06-ai-email-features/) | 9 | Not Started | Done |
| 7 | [Smart Analysis](./phase-07-smart-analysis/) | 7 | Not Started | Done |
| 8 | [Multi-Step Agent](./phase-08-multi-step-agent/) | 3 | Not Started | Done |
| 9 | [Memory](./phase-09-memory/) | 5 | Not Started | Done |
| 10 | [Database](./phase-10-database/) | 6 | Partial | Done |
| 11 | [Dashboard](./phase-11-dashboard/) | 8 | Not Started | Done |
| 12 | [Notifications](./phase-12-notifications/) | 4 | Not Started | Done |
| 13 | [Integrations](./phase-13-integrations/) | 6 | Not Started | Done |
| 14 | [MCP Support](./phase-14-mcp-support/) | 5 | Not Started | Done |
| 15 | [Deployment](./phase-15-deployment/) | 5 | Not Started | Done |

**Total:** 15 phases, 103 task files (+ this README)

---

## Phase Folders

### Phase 1 - Project Setup
- [01-nodejs-setup.md](./phase-01-project-setup/01-nodejs-setup.md)
- [02-express-setup.md](./phase-01-project-setup/02-express-setup.md)
- [03-environment-variables.md](./phase-01-project-setup/03-environment-variables.md)
- [04-logger.md](./phase-01-project-setup/04-logger.md)
- [05-middleware.md](./phase-01-project-setup/05-middleware.md)
- [06-folder-structure.md](./phase-01-project-setup/06-folder-structure.md)
- [07-health-api.md](./phase-01-project-setup/07-health-api.md)
- [08-error-handling.md](./phase-01-project-setup/08-error-handling.md)

### Phase 2 - Authentication
- [01-google-oauth.md](./phase-02-authentication/01-google-oauth.md)
- [02-login.md](./phase-02-authentication/02-login.md)
- [03-logout.md](./phase-02-authentication/03-logout.md)
- [04-access-token.md](./phase-02-authentication/04-access-token.md)
- [05-refresh-token.md](./phase-02-authentication/05-refresh-token.md)
- [06-multi-account-support.md](./phase-02-authentication/06-multi-account-support.md)

### Phase 3 - Gmail Tools
- [01-read-unread-emails.md](./phase-03-gmail-tools/01-read-unread-emails.md) … [17-create-label.md](./phase-03-gmail-tools/17-create-label.md)

### Phase 4 - Gemini Integration
- [01-gemini-api.md](./phase-04-gemini-integration/01-gemini-api.md)
- [02-chat-api.md](./phase-04-gemini-integration/02-chat-api.md)
- [03-system-prompt.md](./phase-04-gemini-integration/03-system-prompt.md)
- [04-prompt-templates.md](./phase-04-gemini-integration/04-prompt-templates.md)
- [05-response-processing.md](./phase-04-gemini-integration/05-response-processing.md)

### Phase 5 - AI Tool Calling
- [01-tool-calling-overview.md](./phase-05-ai-tool-calling/01-tool-calling-overview.md) … [09-listLabels-tool.md](./phase-05-ai-tool-calling/09-listLabels-tool.md)

### Phase 6 - AI Email Features
- [01-email-summary.md](./phase-06-ai-email-features/01-email-summary.md)
- [02-smart-reply.md](./phase-06-ai-email-features/02-smart-reply.md)
- [03-email-rewrite.md](./phase-06-ai-email-features/03-email-rewrite.md)
- [04-professional-tone.md](./phase-06-ai-email-features/04-professional-tone.md)
- [05-friendly-tone.md](./phase-06-ai-email-features/05-friendly-tone.md)
- [06-grammar-fix.md](./phase-06-ai-email-features/06-grammar-fix.md)
- [07-translation.md](./phase-06-ai-email-features/07-translation.md)
- [08-subject-generator.md](./phase-06-ai-email-features/08-subject-generator.md)
- [09-email-classification.md](./phase-06-ai-email-features/09-email-classification.md)

### Phase 7 - Smart Analysis
- [01-detect-urgent-emails.md](./phase-07-smart-analysis/01-detect-urgent-emails.md)
- [02-extract-deadlines.md](./phase-07-smart-analysis/02-extract-deadlines.md)
- [03-extract-action-items.md](./phase-07-smart-analysis/03-extract-action-items.md)
- [04-meeting-detection.md](./phase-07-smart-analysis/04-meeting-detection.md)
- [05-contact-extraction.md](./phase-07-smart-analysis/05-contact-extraction.md)
- [06-company-extraction.md](./phase-07-smart-analysis/06-company-extraction.md)
- [07-priority-detection.md](./phase-07-smart-analysis/07-priority-detection.md)

### Phase 8 - Multi-Step Agent
- [01-agent-overview.md](./phase-08-multi-step-agent/01-agent-overview.md)
- [02-workflow-orchestration.md](./phase-08-multi-step-agent/02-workflow-orchestration.md)
- [03-example-workflows.md](./phase-08-multi-step-agent/03-example-workflows.md)

### Phase 9 - Memory
- [01-conversation-history.md](./phase-09-memory/01-conversation-history.md)
- [02-user-preferences.md](./phase-09-memory/02-user-preferences.md)
- [03-email-signature.md](./phase-09-memory/03-email-signature.md)
- [04-frequently-contacted-people.md](./phase-09-memory/04-frequently-contacted-people.md)
- [05-preferred-writing-style.md](./phase-09-memory/05-preferred-writing-style.md)

### Phase 10 - Database
- [01-users-collection.md](./phase-10-database/01-users-collection.md)
- [02-oauth-tokens-collection.md](./phase-10-database/02-oauth-tokens-collection.md)
- [03-chat-history-collection.md](./phase-10-database/03-chat-history-collection.md)
- [04-email-logs-collection.md](./phase-10-database/04-email-logs-collection.md)
- [05-ai-memory-collection.md](./phase-10-database/05-ai-memory-collection.md)
- [06-settings-collection.md](./phase-10-database/06-settings-collection.md)

### Phase 11 - Dashboard
- [01-login-page.md](./phase-11-dashboard/01-login-page.md)
- [02-dashboard-page.md](./phase-11-dashboard/02-dashboard-page.md)
- [03-chat-page.md](./phase-11-dashboard/03-chat-page.md)
- [04-email-list-page.md](./phase-11-dashboard/04-email-list-page.md)
- [05-email-details-page.md](./phase-11-dashboard/05-email-details-page.md)
- [06-connected-accounts-page.md](./phase-11-dashboard/06-connected-accounts-page.md)
- [07-ai-history-page.md](./phase-11-dashboard/07-ai-history-page.md)
- [08-settings-page.md](./phase-11-dashboard/08-settings-page.md)

### Phase 12 - Notifications
- [01-new-email-alerts.md](./phase-12-notifications/01-new-email-alerts.md)
- [02-urgent-email-alerts.md](./phase-12-notifications/02-urgent-email-alerts.md)
- [03-ai-daily-summary.md](./phase-12-notifications/03-ai-daily-summary.md)
- [04-weekly-report.md](./phase-12-notifications/04-weekly-report.md)

### Phase 13 - Integrations
- [01-outlook.md](./phase-13-integrations/01-outlook.md)
- [02-slack.md](./phase-13-integrations/02-slack.md)
- [03-microsoft-teams.md](./phase-13-integrations/03-microsoft-teams.md)
- [04-whatsapp.md](./phase-13-integrations/04-whatsapp.md)
- [05-crm.md](./phase-13-integrations/05-crm.md)
- [06-google-calendar.md](./phase-13-integrations/06-google-calendar.md)

### Phase 14 - MCP Support
- [01-mcp-client.md](./phase-14-mcp-support/01-mcp-client.md)
- [02-mcp-tools.md](./phase-14-mcp-support/02-mcp-tools.md)
- [03-mcp-resources.md](./phase-14-mcp-support/03-mcp-resources.md)
- [04-mcp-prompts.md](./phase-14-mcp-support/04-mcp-prompts.md)
- [05-external-tool-servers.md](./phase-14-mcp-support/05-external-tool-servers.md)

### Phase 15 - Deployment
- [01-docker.md](./phase-15-deployment/01-docker.md)
- [02-railway.md](./phase-15-deployment/02-railway.md)
- [03-render.md](./phase-15-deployment/03-render.md)
- [04-aws.md](./phase-15-deployment/04-aws.md)
- [05-github-actions-cicd.md](./phase-15-deployment/05-github-actions-cicd.md)

---

## How to Use

1. Open the phase folder for the work you are doing.
2. Update the **Status** field in each task file as you progress (Not Started → In Progress → Done).
3. Check off **Testing** items when verified.
4. Follow phases in order — each phase depends on the previous one.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express.js |
| AI | Gemini API (`@google/generative-ai`) |
| Email | Gmail API |
| Auth | Google OAuth 2.0, JWT |
| Database | MongoDB |
| Validation | Zod |
| Logging | Winston |

---

## Next Step

**Phase 6 — AI Email Features** — implement dedicated `/ai/*` endpoints (docs ready in `phase-06-ai-email-features/`).
