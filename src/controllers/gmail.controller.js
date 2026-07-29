import * as gmailService from '../services/gmail/gmail.service.js';

function getAccountId(req) {
  return req.user.activeAccountId || null;
}

export async function getUnreadEmails(req, res, next) {
  try {
    const result = await gmailService.listUnreadEmails(req.user.id, req.query, getAccountId(req));
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getLatestEmails(req, res, next) {
  try {
    const result = await gmailService.listLatestEmails(req.user.id, req.query, getAccountId(req));
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function searchEmails(req, res, next) {
  try {
    const result = await gmailService.searchEmails(
      req.user.id,
      req.query.q,
      req.query,
      getAccountId(req)
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getEmail(req, res, next) {
  try {
    const email = await gmailService.getEmailById(req.user.id, req.params.id, getAccountId(req));
    res.json({ email });
  } catch (error) {
    next(error);
  }
}

export async function sendEmail(req, res, next) {
  try {
    const { to, subject, body, cc, bcc } = req.body;

    if (!to || !subject || !body) {
      return res.status(400).json({ error: 'to, subject, and body are required' });
    }

    const result = await gmailService.sendEmail(
      req.user.id,
      { to, subject, body, cc, bcc },
      getAccountId(req)
    );
    res.status(201).json({ message: 'Email sent', ...result });
  } catch (error) {
    next(error);
  }
}

export async function replyToEmail(req, res, next) {
  try {
    const { body } = req.body;

    if (!body) {
      return res.status(400).json({ error: 'body is required' });
    }

    const result = await gmailService.replyEmail(
      req.user.id,
      req.params.id,
      body,
      getAccountId(req)
    );
    res.status(201).json({ message: 'Reply sent', ...result });
  } catch (error) {
    next(error);
  }
}

export async function forwardEmail(req, res, next) {
  try {
    const { to, comment } = req.body;

    if (!to) {
      return res.status(400).json({ error: 'to is required' });
    }

    const result = await gmailService.forwardEmail(
      req.user.id,
      req.params.id,
      { to, comment },
      getAccountId(req)
    );
    res.status(201).json({ message: 'Email forwarded', ...result });
  } catch (error) {
    next(error);
  }
}

export async function createDraft(req, res, next) {
  try {
    const { to, subject, body, cc, bcc } = req.body;

    if (!to || !subject || !body) {
      return res.status(400).json({ error: 'to, subject, and body are required' });
    }

    const result = await gmailService.createDraft(
      req.user.id,
      { to, subject, body, cc, bcc },
      getAccountId(req)
    );
    res.status(201).json({ message: 'Draft created', ...result });
  } catch (error) {
    next(error);
  }
}

export async function updateDraft(req, res, next) {
  try {
    const { to, subject, body, cc, bcc } = req.body;

    if (!to || !subject || !body) {
      return res.status(400).json({ error: 'to, subject, and body are required' });
    }

    const result = await gmailService.updateDraft(
      req.user.id,
      req.params.id,
      { to, subject, body, cc, bcc },
      getAccountId(req)
    );
    res.json({ message: 'Draft updated', ...result });
  } catch (error) {
    next(error);
  }
}

export async function deleteEmail(req, res, next) {
  try {
    const permanent = req.query.permanent === 'true';
    const result = await gmailService.deleteEmail(
      req.user.id,
      req.params.id,
      { permanent },
      getAccountId(req)
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function archiveEmail(req, res, next) {
  try {
    const email = await gmailService.archiveEmail(req.user.id, req.params.id, getAccountId(req));
    res.json({ message: 'Email archived', email });
  } catch (error) {
    next(error);
  }
}

export async function markAsRead(req, res, next) {
  try {
    const email = await gmailService.markAsRead(req.user.id, req.params.id, getAccountId(req));
    res.json({ message: 'Email marked as read', email });
  } catch (error) {
    next(error);
  }
}

export async function markAsUnread(req, res, next) {
  try {
    const email = await gmailService.markAsUnread(req.user.id, req.params.id, getAccountId(req));
    res.json({ message: 'Email marked as unread', email });
  } catch (error) {
    next(error);
  }
}

export async function starEmail(req, res, next) {
  try {
    const email = await gmailService.starEmail(req.user.id, req.params.id, getAccountId(req));
    res.json({ message: 'Email starred', email });
  } catch (error) {
    next(error);
  }
}

export async function unstarEmail(req, res, next) {
  try {
    const email = await gmailService.unstarEmail(req.user.id, req.params.id, getAccountId(req));
    res.json({ message: 'Star removed', email });
  } catch (error) {
    next(error);
  }
}

export async function getLabels(req, res, next) {
  try {
    const labels = await gmailService.listLabels(req.user.id, getAccountId(req));
    res.json({ labels });
  } catch (error) {
    next(error);
  }
}

export async function createLabel(req, res, next) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }

    const label = await gmailService.createLabel(req.user.id, name, getAccountId(req));
    res.status(201).json({ message: 'Label created', label });
  } catch (error) {
    next(error);
  }
}
