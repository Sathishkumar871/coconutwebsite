// src/components/chatbot/FloatingButton.tsx

import { Bot, X } from "lucide-react";

interface FloatingButtonProps {
  isOpen: boolean;
  toggleChat: () => void;
}

export default function FloatingButton({
  isOpen,
  toggleChat,
}: FloatingButtonProps) {
  return (
    <button
      className={`chat-floating-button ${isOpen ? "active" : ""}`}
      onClick={toggleChat}
      aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
    >
      {/* Glass Shine */}
      <span className="chat-shine"></span>

      {/* Glow Ring */}
      <span className="chat-ring"></span>

      {/* Online Dot */}
      <span className="chat-online-dot"></span>

      {/* Icon */}
      {isOpen ? (
        <X size={28} strokeWidth={2.5} />
      ) : (
        <Bot size={30} strokeWidth={2.3} />
      )}

      {/* Tooltip */}
      <span className="chat-tooltip">
        {isOpen ? "Close AI" : "Ask CocoFresh AI"}
      </span>
    </button>
  );
}