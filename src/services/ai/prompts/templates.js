const templates = {
  summarize: ({ content, maxPoints = 5 }) =>
    `Summarize the following email in up to ${maxPoints} bullet points. Highlight action items if any.\n\nEmail:\n${content}`,

  smartReply: ({ content, tone = 'professional' }) =>
    `Write a ${tone} reply to this email. Keep it concise and ready to send.\n\nEmail:\n${content}`,

  rewrite: ({ content, instructions }) =>
    `Rewrite the following email text based on these instructions: ${instructions}\n\nText:\n${content}`,

  professionalTone: ({ content }) =>
    `Rewrite the following text in a professional tone:\n\n${content}`,

  friendlyTone: ({ content }) =>
    `Rewrite the following text in a friendly, warm tone:\n\n${content}`,

  grammarFix: ({ content }) =>
    `Fix grammar and spelling in the following text. Return only the corrected text:\n\n${content}`,

  translation: ({ content, language }) =>
    `Translate the following text to ${language}:\n\n${content}`,

  subjectGenerator: ({ content }) =>
    `Suggest 3 clear email subject lines for the following content:\n\n${content}`,

  classification: ({ content }) =>
    `Classify this email into one category (urgent, newsletter, personal, work, spam, other) and explain briefly why:\n\n${content}`,
};

export function getTemplatePrompt(name, params = {}) {
  const template = templates[name];

  if (!template) {
    const error = new Error(`Unknown prompt template: ${name}`);
    error.status = 400;
    throw error;
  }

  return template(params);
}

export function listTemplates() {
  return Object.keys(templates);
}
