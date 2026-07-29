import 'dotenv/config';
import app from './app.js';
import logger from './utils/logger.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not set in environment variables');
    }

    await connectDB();

    app.listen(PORT, () => {
      logger.info(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
}

startServer();
