import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI = null;

export function ensureGeminiConfigured() {
  if (!process.env.GEMINI_API_KEY) {
    const error = new Error('GEMINI_API_KEY is not set in environment variables');
    error.status = 500;
    throw error;
  }

  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }

  return genAI;
}

export function getGeminiModel(systemInstruction, options = {}) {
  const client = ensureGeminiConfigured();
  const { tools } = options;

  const config = {
    model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
    systemInstruction,
  };

  if (tools?.length) {
    config.tools = tools;
  }

  return client.getGenerativeModel(config);
}
