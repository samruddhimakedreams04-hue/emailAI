import { sendChat } from '../services/ai/chat.service.js';
import { runAgent } from '../services/ai/agent.service.js';
import { listTemplates } from '../services/ai/prompts/templates.js';

export async function chat(req, res, next) {
  try {
    const { messages, template, params, agent = true } = req.body;

    let result;

    if (template) {
      result = await sendChat({ messages, template, params });
    } else if (agent !== false) {
      result = await runAgent(req.user.id, req.user.activeAccountId, { messages });
    } else {
      result = await sendChat({ messages, template, params });
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
}

export function getChatTemplates(req, res) {
  res.json({ templates: listTemplates() });
}
