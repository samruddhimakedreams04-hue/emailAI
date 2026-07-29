import { getGeminiModel } from '../../config/gemini.js';
import { AGENT_SYSTEM_PROMPT } from './prompts/agent.js';
import { handleGeminiError } from './responseProcessor.js';
import { getGeminiTools } from '../../tools/definitions.js';
import { executeTool } from '../../tools/index.js';

const MAX_AGENT_ITERATIONS = 10;

function mapMessagesToGeminiHistory(messages) {
  return messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }],
    }));
}

function validateMessages(messages) {
  if (!Array.isArray(messages) || !messages.length) {
    const error = new Error('messages array is required');
    error.status = 400;
    throw error;
  }

  const lastMessage = messages[messages.length - 1];

  if (lastMessage.role !== 'user') {
    const error = new Error('Last message must have role "user"');
    error.status = 400;
    throw error;
  }

  for (const message of messages) {
    if (!message.content?.trim()) {
      const error = new Error('Each message must have non-empty content');
      error.status = 400;
      throw error;
    }
  }

  return messages;
}

export async function runAgent(userId, accountId, { messages }) {
  try {
    const conversation = validateMessages(messages);
    const tools = getGeminiTools();
    const model = getGeminiModel(AGENT_SYSTEM_PROMPT, { tools });
    const history = mapMessagesToGeminiHistory(conversation.slice(0, -1));
    const lastMessage = conversation[conversation.length - 1];

    const chat = model.startChat({ history });
    let response = (await chat.sendMessage(lastMessage.content)).response;

    const toolsUsed = [];
    let iterations = 0;

    while (iterations < MAX_AGENT_ITERATIONS) {
      const functionCalls = response.functionCalls();

      if (!functionCalls?.length) {
        break;
      }

      const functionResponses = [];

      for (const call of functionCalls) {
        toolsUsed.push(call.name);

        try {
          const result = await executeTool(call.name, call.args || {}, { userId, accountId });
          functionResponses.push({
            functionResponse: {
              name: call.name,
              response: { result },
            },
          });
        } catch (toolError) {
          functionResponses.push({
            functionResponse: {
              name: call.name,
              response: {
                error: toolError.message || 'Tool execution failed',
              },
            },
          });
        }
      }

      response = (await chat.sendMessage(functionResponses)).response;
      iterations += 1;
    }

    const content = response.text();

    if (!content?.trim()) {
      const error = new Error('Agent did not return a final response');
      error.status = 400;
      throw error;
    }

    return {
      message: {
        role: 'assistant',
        content,
      },
      toolsUsed: [...new Set(toolsUsed)],
      iterations,
    };
  } catch (error) {
    throw handleGeminiError(error);
  }
}
