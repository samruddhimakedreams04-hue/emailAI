import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not set in environment variables');
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  });
  logger.info('Connected to MongoDB');
}
