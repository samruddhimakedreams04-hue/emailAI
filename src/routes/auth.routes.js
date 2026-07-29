import { Router } from 'express';
import {
  googleLogin,
  googleCallback,
  logout,
  getAccounts,
  activateAccount,
  disconnectAccount,
  getMe,
  authenticate,
  optionalAuthenticate,
} from '../controllers/auth.controller.js';

const router = Router();

router.get('/google', optionalAuthenticate, googleLogin);
router.get('/google/callback', googleCallback);
router.post('/logout', authenticate, logout);
router.get('/me', authenticate, getMe);
router.get('/accounts', authenticate, getAccounts);
router.post('/accounts/:id/activate', authenticate, activateAccount);
router.delete('/accounts/:id', authenticate, disconnectAccount);

export default router;
