import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware.js';
import {
  summary,
  smartReply,
  rewrite,
  professionalTone,
  friendlyTone,
  grammarFix,
  translate,
  subjectGenerator,
  classify,
} from '../controllers/ai.controller.js';

const router = Router();

router.use(authenticate);

router.post('/summary', summary);
router.post('/smart-reply', smartReply);
router.post('/rewrite', rewrite);
router.post('/tone/professional', professionalTone);
router.post('/tone/friendly', friendlyTone);
router.post('/grammar-fix', grammarFix);
router.post('/translate', translate);
router.post('/subject', subjectGenerator);
router.post('/classify', classify);

export default router;
