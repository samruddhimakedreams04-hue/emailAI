import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware.js';
import {
  getUnreadEmails,
  getLatestEmails,
  searchEmails,
  getEmail,
  sendEmail,
  replyToEmail,
  forwardEmail,
  createDraft,
  updateDraft,
  deleteEmail,
  archiveEmail,
  markAsRead,
  markAsUnread,
  starEmail,
  unstarEmail,
  getLabels,
  createLabel,
} from '../controllers/gmail.controller.js';

const router = Router();

router.use(authenticate);

router.get('/emails/unread', getUnreadEmails);
router.get('/emails/latest', getLatestEmails);
router.get('/emails/search', searchEmails);
router.post('/emails/send', sendEmail);

router.get('/emails/:id', getEmail);
router.post('/emails/:id/reply', replyToEmail);
router.post('/emails/:id/forward', forwardEmail);
router.post('/emails/:id/archive', archiveEmail);
router.post('/emails/:id/read', markAsRead);
router.post('/emails/:id/unread', markAsUnread);
router.post('/emails/:id/star', starEmail);
router.delete('/emails/:id/star', unstarEmail);
router.delete('/emails/:id', deleteEmail);

router.post('/drafts', createDraft);
router.put('/drafts/:id', updateDraft);

router.get('/labels', getLabels);
router.post('/labels', createLabel);

export default router;
