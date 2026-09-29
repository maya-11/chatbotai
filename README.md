# RAG Chatbot

A streaming chatbot that answers questions from your own documents using retrieval-augmented generation (RAG). Content is stored as embeddings in a vector database; each question retrieves the most relevant chunks and the model answers from them.

Built during the Headstarter Software Engineering Fellowship (2024).

## Tech stack

- **Next.js 14** (App Router), **TypeScript**, Tailwind CSS
- **Upstash RAG Chat**: retrieval-augmented generation pipeline
- **Upstash Vector** (embeddings store) and **Upstash Redis** (chat history)
- **Meta Llama 3 8B Instruct** as the answering model
- **Vercel AI SDK** (`ai/react`) for streaming chat in the UI

## How it works

```
Question ─▶ /api/chat-stream ─▶ retrieve relevant chunks from Upstash Vector
         ─▶ Llama 3 answers using them ─▶ response streamed to the browser
```

- `src/app/lib/rag-chat.ts`: RAG pipeline setup
- `src/app/api/chat-stream/route.ts`: streaming chat endpoint (up to 30s responses)
- `src/components/ChatWrapper.tsx`: chat UI using `useChat`

## Running locally

1. Create an Upstash account and a Vector index.
2. Copy `.env.example` to `.env` and fill in the values.
3. Run:

```bash
npm install
npm run dev
```
