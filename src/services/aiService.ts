import axios from 'axios';

export async function generateReplySuggestions(
  workspaceId: string,
  conversationHistory: { content: string; senderType: string }[]
) {
  const response = await axios.post('/api/ai/reply-suggestions', {
    workspaceId,
    history: conversationHistory,
  });

  return Array.isArray(response.data?.suggestions) ? response.data.suggestions : [];
}

export async function summarizeConversation(
  workspaceId: string,
  conversationHistory: { content: string; senderType: string }[]
) {
  const response = await axios.post('/api/ai/summarize', {
    workspaceId,
    history: conversationHistory,
  });

  return response.data?.summary || 'No summary available.';
}
