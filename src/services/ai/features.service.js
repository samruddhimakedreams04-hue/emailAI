import * as gmailService from '../gmail/gmail.service.js';
import { buildReplySubject } from '../../utils/emailBuilder.js';
import { sendChat } from './chat.service.js';

const CLASSIFICATION_CATEGORIES = ['urgent', 'newsletter', 'personal', 'work', 'spam', 'other'];

async function resolveContent(userId, accountId, { content, messageId }) {
  if (content?.trim()) {
    return { content: content.trim(), email: null };
  }

  if (messageId) {
    const email = await gmailService.getEmailById(userId, messageId, accountId);
    const body = email.body || email.snippet || '';

    if (!body.trim()) {
      const error = new Error('Email has no readable content');
      error.status = 400;
      throw error;
    }

    return { content: body.trim(), email };
  }

  const error = new Error('content or messageId is required');
  error.status = 400;
  throw error;
}

function requireContent(content) {
  if (!content?.trim()) {
    const error = new Error('content is required');
    error.status = 400;
    throw error;
  }

  return content.trim();
}

async function runTemplate(template, params) {
  return sendChat({ template, params });
}

function parseClassification(text) {
  const lower = text.toLowerCase();
  const category = CLASSIFICATION_CATEGORIES.find((item) => lower.includes(item)) || 'other';

  return {
    category,
    reason: text.trim(),
  };
}

export async function summarizeEmail(userId, accountId, { content, messageId, maxPoints = 5 }) {
  const resolved = await resolveContent(userId, accountId, { content, messageId });
  const result = await runTemplate('summarize', {
    content: resolved.content,
    maxPoints,
  });

  return {
    summary: result.message.content,
    usage: result.usage,
  };
}

export async function generateSmartReply(
  userId,
  accountId,
  { content, messageId, tone = 'professional', createDraft = false }
) {
  const resolved = await resolveContent(userId, accountId, { content, messageId });
  const result = await runTemplate('smartReply', {
    content: resolved.content,
    tone,
  });

  const response = {
    reply: result.message.content,
    usage: result.usage,
  };

  if (createDraft && resolved.email) {
    response.draft = await gmailService.createDraft(
      userId,
      {
        to: resolved.email.from,
        subject: buildReplySubject(resolved.email.subject),
        body: result.message.content,
      },
      accountId
    );
  }

  return response;
}

export async function rewriteEmail(userId, accountId, { content, instructions }) {
  const text = requireContent(content);

  if (!instructions?.trim()) {
    const error = new Error('instructions is required');
    error.status = 400;
    throw error;
  }

  const result = await runTemplate('rewrite', { content: text, instructions: instructions.trim() });

  return {
    text: result.message.content,
    usage: result.usage,
  };
}

export async function applyProfessionalTone(userId, accountId, { content }) {
  const text = requireContent(content);
  const result = await runTemplate('professionalTone', { content: text });

  return {
    text: result.message.content,
    usage: result.usage,
  };
}

export async function applyFriendlyTone(userId, accountId, { content }) {
  const text = requireContent(content);
  const result = await runTemplate('friendlyTone', { content: text });

  return {
    text: result.message.content,
    usage: result.usage,
  };
}

export async function fixGrammar(userId, accountId, { content }) {
  const text = requireContent(content);
  const result = await runTemplate('grammarFix', { content: text });

  return {
    text: result.message.content,
    usage: result.usage,
  };
}

export async function translateEmail(userId, accountId, { content, language }) {
  const text = requireContent(content);

  if (!language?.trim()) {
    const error = new Error('language is required');
    error.status = 400;
    throw error;
  }

  const result = await runTemplate('translation', {
    content: text,
    language: language.trim(),
  });

  return {
    text: result.message.content,
    usage: result.usage,
  };
}

export async function generateSubjects(userId, accountId, { content, messageId }) {
  const resolved = await resolveContent(userId, accountId, { content, messageId });
  const result = await runTemplate('subjectGenerator', { content: resolved.content });

  return {
    subjects: result.message.content,
    usage: result.usage,
  };
}

export async function classifyEmail(userId, accountId, { content, messageId }) {
  const resolved = await resolveContent(userId, accountId, { content, messageId });
  const result = await runTemplate('classification', { content: resolved.content });
  const parsed = parseClassification(result.message.content);

  return {
    ...parsed,
    usage: result.usage,
  };
}
