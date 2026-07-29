import { getGeminiModel } from '../../config/gemini.js';
import { SYSTEM_PROMPT } from './prompts/system.js';
import { getTemplatePrompt } from './prompts/templates.js';
import { processGeminiResponse, handleGeminiError } from './responseProcessor.js';

function mapMessagesToGeminiHistory(messages) {
  return messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }],
    }));
}

function buildMessages({ messages = [], template, params }) {
  const normalized = Array.isArray(messages) ? [...messages] : [];

  if (template) {
    const templatePrompt = getTemplatePrompt(template, params || {});
    normalized.push({ role: 'user', content: templatePrompt });
  }

  if (!normalized.length) {
    const error = new Error('messages array or template is required');
    error.status = 400;
    throw error;
  }

  const lastMessage = normalized[normalized.length - 1];

  if (lastMessage.role !== 'user') {
    const error = new Error('Last message must have role "user"');
    error.status = 400;
    throw error;
  }

  for (const message of normalized) {
    if (!message.content?.trim()) {
      const error = new Error('Each message must have non-empty content');
      error.status = 400;
      throw error;
    }

    if (!['user', 'assistant', 'system'].includes(message.role)) {
      const error = new Error('Message role must be user, assistant, or system');
      error.status = 400;
      throw error;
    }
  }

  return normalized;
}

export async function sendChat({ messages, template, params }) {
  try {
    const conversation = buildMessages({ messages, template, params });
    const model = getGeminiModel(SYSTEM_PROMPT);
    const history = mapMessagesToGeminiHistory(conversation.slice(0, -1));
    const lastMessage = conversation[conversation.length - 1];

    let result;

    if (history.length === 0) {
      result = await model.generateContent(lastMessage.content);
    } else {
      const chat = model.startChat({ history });
      result = await chat.sendMessage(lastMessage.content);
    }

    return processGeminiResponse(result);
  } catch (error) {
    throw handleGeminiError(error);
  }
}
