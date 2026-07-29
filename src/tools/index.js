import * as gmailService from '../services/gmail/gmail.service.js';

function truncateEmails(result) {
  if (!result?.emails) {
    return result;
  }

  return {
    ...result,
    emails: result.emails.map((email) => ({
      ...email,
      snippet: email.snippet?.slice(0, 200) || '',
    })),
  };
}

export async function executeTool(name, args, { userId, accountId }) {
  switch (name) {
    case 'readEmails': {
      const maxResults = args.maxResults || 10;
      if (args.type === 'unread') {
        return truncateEmails(await gmailService.listUnreadEmails(userId, { maxResults }, accountId));
      }
      return truncateEmails(await gmailService.listLatestEmails(userId, { maxResults }, accountId));
    }

    case 'searchEmails':
      return truncateEmails(
        await gmailService.searchEmails(userId, args.query, { maxResults: args.maxResults || 10 }, accountId)
      );

    case 'sendEmail':
      return gmailService.sendEmail(
        userId,
        { to: args.to, subject: args.subject, body: args.body },
        accountId
      );

    case 'replyEmail':
      return gmailService.replyEmail(userId, args.messageId, args.body, accountId);

    case 'draftEmail':
      return gmailService.createDraft(
        userId,
        { to: args.to, subject: args.subject, body: args.body },
        accountId
      );

    case 'archiveEmail':
      return gmailService.archiveEmail(userId, args.messageId, accountId);

    case 'deleteEmail':
      return gmailService.deleteEmail(
        userId,
        args.messageId,
        { permanent: args.permanent === true },
        accountId
      );

    case 'listLabels':
      return { labels: await gmailService.listLabels(userId, accountId) };

    default: {
      const error = new Error(`Unknown tool: ${name}`);
      error.status = 400;
      throw error;
    }
  }
}
