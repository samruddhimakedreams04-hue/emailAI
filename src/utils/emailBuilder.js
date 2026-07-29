import { encodeBase64Url } from './emailParser.js';

function formatAddressList(addresses) {
  if (!addresses) {
    return '';
  }

  if (Array.isArray(addresses)) {
    return addresses.join(', ');
  }

  return addresses;
}

export function buildRawEmail({
  to,
  subject,
  body,
  cc = [],
  bcc = [],
  inReplyTo,
  references,
  contentType = 'text/plain; charset=UTF-8',
}) {
  const lines = [
    `To: ${formatAddressList(to)}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: ${contentType}`,
  ];

  const ccLine = formatAddressList(cc);
  const bccLine = formatAddressList(bcc);

  if (ccLine) {
    lines.push(`Cc: ${ccLine}`);
  }

  if (bccLine) {
    lines.push(`Bcc: ${bccLine}`);
  }

  if (inReplyTo) {
    lines.push(`In-Reply-To: ${inReplyTo}`);
  }

  if (references) {
    lines.push(`References: ${references}`);
  }

  lines.push('', body);

  return lines.join('\r\n');
}

export function buildEncodedRawEmail(options) {
  return encodeBase64Url(buildRawEmail(options));
}

export function buildForwardBody(original, comment = '') {
  const headerBlock = [
    '---------- Forwarded message ---------',
    `From: ${original.from}`,
    `Date: ${original.date}`,
    `Subject: ${original.subject}`,
    `To: ${original.to}`,
    '',
    original.bodyText || original.body || '',
  ].join('\n');

  if (!comment) {
    return headerBlock;
  }

  return `${comment}\n\n${headerBlock}`;
}

export function buildReplySubject(subject) {
  if (/^re:/i.test(subject)) {
    return subject;
  }

  return `Re: ${subject}`;
}

export function buildForwardSubject(subject) {
  if (/^fwd:/i.test(subject)) {
    return subject;
  }

  return `Fwd: ${subject}`;
}
