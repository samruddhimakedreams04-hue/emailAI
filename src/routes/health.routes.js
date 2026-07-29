import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Email AI Agent',
    status: 'running',
    endpoints: {
      health: '/health',
      auth: {
        login: 'GET /auth/google',
        callback: 'GET /auth/google/callback',
        logout: 'POST /auth/logout',
        me: 'GET /auth/me',
        accounts: 'GET /auth/accounts',
        activateAccount: 'POST /auth/accounts/:id/activate',
        disconnectAccount: 'DELETE /auth/accounts/:id',
      },
      gmail: {
        unread: 'GET /gmail/emails/unread',
        latest: 'GET /gmail/emails/latest',
        search: 'GET /gmail/emails/search?q=',
        getById: 'GET /gmail/emails/:id',
        send: 'POST /gmail/emails/send',
        reply: 'POST /gmail/emails/:id/reply',
        forward: 'POST /gmail/emails/:id/forward',
        archive: 'POST /gmail/emails/:id/archive',
        markRead: 'POST /gmail/emails/:id/read',
        markUnread: 'POST /gmail/emails/:id/unread',
        star: 'POST /gmail/emails/:id/star',
        unstar: 'DELETE /gmail/emails/:id/star',
        delete: 'DELETE /gmail/emails/:id',
        createDraft: 'POST /gmail/drafts',
        updateDraft: 'PUT /gmail/drafts/:id',
        labels: 'GET /gmail/labels',
        createLabel: 'POST /gmail/labels',
      },
      chat: {
        send: 'POST /chat (Gemini agent with Gmail tools by default)',
        templates: 'GET /chat/templates',
      },
    },
  });
});

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Email AI Agent is running',
  });
});

export default router;
