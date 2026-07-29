export function decodeBase64Url(data) {
  if (!data) {
    return '';
  }

  const normalized = data.replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(normalized, 'base64').toString('utf-8');
}

export function encodeBase64Url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function getHeader(headers, name) {
  const header = headers?.find((item) => item.name.toLowerCase() === name.toLowerCase());
  return header?.value || '';
}

function extractBodyFromPart(part) {
  if (part.body?.data) {
    return decodeBase64Url(part.body.data);
  }

  if (part.parts?.length) {
    let text = '';
    let html = '';

    for (const subPart of part.parts) {
      const content = extractBodyFromPart(subPart);
      if (subPart.mimeType === 'text/html') {
        html += content.html || content.text || '';
      } else if (subPart.mimeType === 'text/plain') {
        text += content.text || '';
      } else if (content.text || content.html) {
        text += content.text || content.html || '';
      }
    }

    return { text, html };
  }

  return { text: '', html: '' };
}

export function parseMessageBody(payload) {
  if (!payload) {
    return { text: '', html: '', attachments: [] };
  }

  const attachments = [];

  function collectAttachments(part) {
    if (part.filename && part.body?.attachmentId) {
      attachments.push({
        id: part.body.attachmentId,
        filename: part.filename,
        mimeType: part.mimeType,
        size: part.body.size,
      });
    }

    part.parts?.forEach(collectAttachments);
  }

  collectAttachments(payload);

  if (payload.mimeType === 'text/plain' && payload.body?.data) {
    return {
      text: decodeBase64Url(payload.body.data),
      html: '',
      attachments,
    };
  }

  if (payload.mimeType === 'text/html' && payload.body?.data) {
    return {
      text: '',
      html: decodeBase64Url(payload.body.data),
      attachments,
    };
  }

  const body = extractBodyFromPart(payload);
  return {
    text: body.text || '',
    html: body.html || '',
    attachments,
  };
}

export function formatMessageSummary(message) {
  const headers = message.payload?.headers || [];
  const labelIds = message.labelIds || [];

  return {
    id: message.id,
    threadId: message.threadId,
    subject: getHeader(headers, 'Subject') || '(no subject)',
    from: getHeader(headers, 'From'),
    to: getHeader(headers, 'To'),
    date: getHeader(headers, 'Date'),
    snippet: message.snippet || '',
    isUnread: labelIds.includes('UNREAD'),
    isStarred: labelIds.includes('STARRED'),
    labelIds,
  };
}

export function formatFullMessage(message) {
  const summary = formatMessageSummary(message);
  const body = parseMessageBody(message.payload);

  return {
    ...summary,
    body: body.text || body.html,
    bodyText: body.text,
    bodyHtml: body.html,
    attachments: body.attachments,
    messageId: getHeader(message.payload?.headers || [], 'Message-ID'),
  };
}
