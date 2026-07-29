import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware.js';
import { chat, getChatTemplates } from '../controllers/chat.controller.js';

const router = Router();

router.use(authenticate);

router.post('/', chat);
router.get('/templates', getChatTemplates);

export default router;
