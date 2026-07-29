import logger from '../../utils/logger.js';

export function processGeminiResponse(result) {
  const response = result.response;
  const text = response.text();

  if (!text?.trim()) {
    const error = new Error('Gemini returned an empty response');
    error.status = 400;
    throw error;
  }

  return {
    message: {
      role: 'assistant',
      content: text,
    },
    usage: response.usageMetadata || null,
  };
}

export function handleGeminiError(error) {
  logger.error(error.message);

  const message = error.message?.toLowerCase() || '';

  if (message.includes('api key') || message.includes('api_key')) {
    const configError = new Error('Invalid or missing Gemini API key');
    configError.status = 500;
    return configError;
  }

  if (message.includes('quota') || message.includes('rate') || message.includes('429')) {
    const rateError = new Error('Gemini rate limit or quota exceeded');
    rateError.status = 429;
    return rateError;
  }

  if (message.includes('timeout') || message.includes('deadline')) {
    const timeoutError = new Error('Gemini request timed out');
    timeoutError.status = 504;
    return timeoutError;
  }

  if (message.includes('safety') || message.includes('blocked')) {
    const safetyError = new Error('Response blocked by Gemini safety filters');
    safetyError.status = 400;
    return safetyError;
  }

  if (error.status) {
    return error;
  }

  const genericError = new Error(error.message || 'Gemini request failed');
  genericError.status = 400;
  return genericError;
}
