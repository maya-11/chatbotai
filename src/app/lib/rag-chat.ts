// src/app/lib/rag-chat.ts
import { RAGChat, upstash } from "@upstash/rag-chat";

// Log the environment variables to check if they are loaded correctly
console.log('QSTASH_TOKEN:', process.env.QSTASH_TOKEN);

export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
});
