import { SchemaType } from '@google/generative-ai';

export function getToolDeclarations() {
  return [
    {
      name: 'readEmails',
      description: 'Read unread or latest emails from the user inbox',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          type: {
            type: SchemaType.STRING,
            format: 'enum',
            enum: ['unread', 'latest'],
            description: 'Type of emails to read',
          },
          maxResults: {
            type: SchemaType.NUMBER,
            description: 'Maximum number of emails to return (default 10)',
          },
        },
        required: ['type'],
      },
    },
    {
      name: 'searchEmails',
      description: 'Search emails using Gmail query syntax e.g. from:user@example.com is:unread',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          query: {
            type: SchemaType.STRING,
            description: 'Gmail search query',
          },
          maxResults: {
            type: SchemaType.NUMBER,
            description: 'Maximum number of results (default 10)',
          },
        },
        required: ['query'],
      },
    },
    {
      name: 'sendEmail',
      description: 'Send a new email. Use only when user explicitly asks to send.',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          to: { type: SchemaType.STRING, description: 'Recipient email address' },
          subject: { type: SchemaType.STRING, description: 'Email subject' },
          body: { type: SchemaType.STRING, description: 'Email body text' },
        },
        required: ['to', 'subject', 'body'],
      },
    },
    {
      name: 'replyEmail',
      description: 'Reply to an existing email by message ID',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          messageId: { type: SchemaType.STRING, description: 'Gmail message ID' },
          body: { type: SchemaType.STRING, description: 'Reply body text' },
        },
        required: ['messageId', 'body'],
      },
    },
    {
      name: 'draftEmail',
      description: 'Create an email draft without sending. Prefer for AI-generated replies.',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          to: { type: SchemaType.STRING, description: 'Recipient email address' },
          subject: { type: SchemaType.STRING, description: 'Email subject' },
          body: { type: SchemaType.STRING, description: 'Draft body text' },
        },
        required: ['to', 'subject', 'body'],
      },
    },
    {
      name: 'archiveEmail',
      description: 'Archive an email by removing it from inbox',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          messageId: { type: SchemaType.STRING, description: 'Gmail message ID' },
        },
        required: ['messageId'],
      },
    },
    {
      name: 'deleteEmail',
      description: 'Move an email to trash. Use only when user explicitly asks to delete.',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          messageId: { type: SchemaType.STRING, description: 'Gmail message ID' },
          permanent: {
            type: SchemaType.BOOLEAN,
            description: 'Permanently delete instead of trash (default false)',
          },
        },
        required: ['messageId'],
      },
    },
    {
      name: 'listLabels',
      description: 'List all Gmail labels for the connected account',
      parameters: {
        type: SchemaType.OBJECT,
        properties: {},
      },
    },
  ];
}

export function getGeminiTools() {
  return [{ functionDeclarations: getToolDeclarations() }];
}
