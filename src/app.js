import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import healthRoutes from './routes/health.routes.js';
import authRoutes from './routes/auth.routes.js';
import gmailRoutes from './routes/gmail.routes.js';
import chatRoutes from './routes/chat.routes.js';
import aiRoutes from './routes/ai.routes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(healthRoutes);
app.use('/auth', authRoutes);
app.use('/gmail', gmailRoutes);
app.use('/chat', chatRoutes);
app.use('/ai', aiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
