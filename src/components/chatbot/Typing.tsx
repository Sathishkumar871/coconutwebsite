// src/components/chatbot/Typing.tsx

import "./chatbot.css";

export default function Typing() {
  return (
    <div className="bot-message">
      <div className="typing-box">
        <span className="typing-dot"></span>
        <span className="typing-dot"></span>
        <span className="typing-dot"></span>
      </div>
    </div>
  );
}