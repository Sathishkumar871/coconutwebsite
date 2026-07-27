// src/components/chatbot/ChatMessage.tsx

import type { Message } from "./types";
interface Props {
  message: Message;
}
export default function ChatMessage({ message }: Props) {
  return (
    <div
      className={
        message.sender === "user"
          ? "message user-message"
          : "message bot-message"
      }
    >
      <div className="message-text">
        {message.text}
      </div>
      <div className="message-time">
        {message.time}
      </div>
    </div>
  );
}