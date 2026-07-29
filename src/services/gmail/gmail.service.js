import { getAuthenticatedGmailClient } from '../auth/token.service.js';
import {
  formatMessageSummary,
  formatFullMessage,
} from '../../utils/emailParser.js';
import {
  buildEncodedRawEmail,
  buildForwardBody,
  buildReplySubject,
  buildForwardSubject,
} from '../../utils/emailBuilder.js';

async function getGmail(userId, accountId = null) {
  return getAuthenticatedGmailClient(userId, accountId);
}

async function fetchMessageSummaries(gmail, messageIds) {
  if (!messageIds.length) {
    return [];
  }

  const messages = await Promise.all(
    messageIds.map(async ({ id }) => {
      const { data } = await gmail.users.messages.get({
        userId: 'me',
        id,
        format: 'metadata',
        metadataHeaders: ['Subject', 'From', 'To', 'Date'],
      });

      return formatMessageSummary(data);
    })
  );

  return messages;
}

async function listMessages(userId, { q, labelIds, maxResults = 10, pageToken }, accountId) {
  const gmail = await getGmail(userId, accountId);

  const { data } = await gmail.users.messages.list({
    userId: 'me',
    q,
    labelIds,
    maxResults: Number(maxResults),
    pageToken,
  });

  const emails = await fetchMessageSummaries(gmail, data.messages || []);

  return {
    emails,
    nextPageToken: data.nextPageToken || null,
    resultSizeEstimate: data.resultSizeEstimate || emails.length,
  };
}

export async function listUnreadEmails(userId, options = {}, accountId = null) {
  return listMessages(
    userId,
    {
      q: 'is:unread',
      maxResults: options.maxResults || 10,
      pageToken: options.pageToken,
    },
    accountId
  );
}

export async function listLatestEmails(userId, options = {}, accountId = null) {
  return listMessages(
    userId,
    {
      labelIds: ['INBOX'],
      maxResults: options.maxResults || 10,
      pageToken: options.pageToken,
    },
    accountId
  );
}

export async function searchEmails(userId, query, options = {}, accountId = null) {
  if (!query?.trim()) {
    const error = new Error('Search query is required');
    error.status = 400;
    throw error;
  }

  return listMessages(
    userId,
    {
      q: query,
      maxResults: options.maxResults || 10,
      pageToken: options.pageToken,
    },
    accountId
  );
}

export async function getEmailById(userId, messageId, accountId = null) {
  const gmail = await getGmail(userId, accountId);

  try {
    const { data } = await gmail.users.messages.get({
      userId: 'me',
      id: messageId,
      format: 'full',
    });

    return formatFullMessage(data);
  } catch (error) {
    if (error.code === 404) {
      const notFound = new Error('Email not found');
      notFound.status = 404;
      throw notFound;
    }
    throw error;
  }
}

async function getOriginalMessage(userId, messageId, accountId) {
  const gmail = await getGmail(userId, accountId);

  const { data } = await gmail.users.messages.get({
    userId: 'me',
    id: messageId,
    format: 'full',
  });

  return { gmail, message: formatFullMessage(data), raw: data };
}

export async function sendEmail(userId, { to, subject, body, cc, bcc }, accountId = null) {
  const gmail = await getGmail(userId, accountId);

  const { data } = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: buildEncodedRawEmail({ to, subject, body, cc, bcc }),
    },
  });

  return {
    id: data.id,
    threadId: data.threadId,
    labelIds: data.labelIds,
  };
}

export async function replyEmail(userId, messageId, body, accountId = null) {
  const { gmail, message } = await getOriginalMessage(userId, messageId, accountId);
  const replyTo = message.from;
  const subject = buildReplySubject(message.subject);

  const { data } = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: buildEncodedRawEmail({
        to: replyTo,
        subject,
        body,
        inReplyTo: message.messageId,
        references: message.messageId,
      }),
      threadId: message.threadId,
    },
  });

  return {
    id: data.id,
    threadId: data.threadId,
    labelIds: data.labelIds,
  };
}

export async function forwardEmail(userId, messageId, { to, comment }, accountId = null) {
  const { gmail, message } = await getOriginalMessage(userId, messageId, accountId);

  const { data } = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: buildEncodedRawEmail({
        to,
        subject: buildForwardSubject(message.subject),
        body: buildForwardBody(message, comment),
      }),
    },
  });

  return {
    id: data.id,
    threadId: data.threadId,
    labelIds: data.labelIds,
  };
}

export async function createDraft(userId, { to, subject, body, cc, bcc }, accountId = null) {
  const gmail = await getGmail(userId, accountId);

  const { data } = await gmail.users.drafts.create({
    userId: 'me',
    requestBody: {
      message: {
        raw: buildEncodedRawEmail({ to, subject, body, cc, bcc }),
      },
    },
  });

  return {
    draftId: data.id,
    messageId: data.message?.id,
    threadId: data.message?.threadId,
  };
}

export async function updateDraft(userId, draftId, { to, subject, body, cc, bcc }, accountId = null) {
  const gmail = await getGmail(userId, accountId);

  const { data } = await gmail.users.drafts.update({
    userId: 'me',
    id: draftId,
    requestBody: {
      message: {
        raw: buildEncodedRawEmail({ to, subject, body, cc, bcc }),
      },
    },
  });

  return {
    draftId: data.id,
    messageId: data.message?.id,
    threadId: data.message?.threadId,
  };
}

export async function deleteEmail(userId, messageId, { permanent = false } = {}, accountId = null) {
  const gmail = await getGmail(userId, accountId);

  if (permanent) {
    await gmail.users.messages.delete({
      userId: 'me',
      id: messageId,
    });

    return { message: 'Email permanently deleted', id: messageId };
  }

  const { data } = await gmail.users.messages.trash({
    userId: 'me',
    id: messageId,
  });

  return {
    message: 'Email moved to trash',
    id: data.id,
    labelIds: data.labelIds,
  };
}

export async function archiveEmail(userId, messageId, accountId = null) {
  return modifyLabels(userId, messageId, { remove: ['INBOX'] }, accountId);
}

export async function markAsRead(userId, messageId, accountId = null) {
  return modifyLabels(userId, messageId, { remove: ['UNREAD'] }, accountId);
}

export async function markAsUnread(userId, messageId, accountId = null) {
  return modifyLabels(userId, messageId, { add: ['UNREAD'] }, accountId);
}

export async function starEmail(userId, messageId, accountId = null) {
  return modifyLabels(userId, messageId, { add: ['STARRED'] }, accountId);
}

export async function unstarEmail(userId, messageId, accountId = null) {
  return modifyLabels(userId, messageId, { remove: ['STARRED'] }, accountId);
}

async function modifyLabels(userId, messageId, { add = [], remove = [] }, accountId) {
  const gmail = await getGmail(userId, accountId);

  const requestBody = {};
  if (add.length) {
    requestBody.addLabelIds = add;
  }
  if (remove.length) {
    requestBody.removeLabelIds = remove;
  }

  const { data } = await gmail.users.messages.modify({
    userId: 'me',
    id: messageId,
    requestBody,
  });

  return formatMessageSummary(data);
}

export async function listLabels(userId, accountId = null) {
  const gmail = await getGmail(userId, accountId);

  const { data } = await gmail.users.labels.list({
    userId: 'me',
  });

  return (data.labels || []).map((label) => ({
    id: label.id,
    name: label.name,
    type: label.type,
    messageListVisibility: label.messageListVisibility,
    labelListVisibility: label.labelListVisibility,
    messagesTotal: label.messagesTotal,
    messagesUnread: label.messagesUnread,
  }));
}

export async function createLabel(userId, name, accountId = null) {
  if (!name?.trim()) {
    const error = new Error('Label name is required');
    error.status = 400;
    throw error;
  }

  const gmail = await getGmail(userId, accountId);

  try {
    const { data } = await gmail.users.labels.create({
      userId: 'me',
      requestBody: {
        name: name.trim(),
        labelListVisibility: 'labelShow',
        messageListVisibility: 'show',
      },
    });

    return {
      id: data.id,
      name: data.name,
      type: data.type,
    };
  } catch (error) {
    if (error.code === 409) {
      const conflict = new Error('Label already exists');
      conflict.status = 409;
      throw conflict;
    }
    throw error;
  }
}
