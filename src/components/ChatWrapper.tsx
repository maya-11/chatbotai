"use client";

import { Message, useChat } from "ai/react";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        {JSON.stringify(messages)}
      </div>

      <form onSubmit={handleSubmit} className="p-4 flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-1 p-2 bg-zinc-700 text-white rounded-md"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWrapper;
