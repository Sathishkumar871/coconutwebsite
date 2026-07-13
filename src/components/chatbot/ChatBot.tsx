import { useEffect, useRef, useState } from "react";
import "./chatbot.css";

import ChatMessage from "./ChatMessage";
import Typing from "./Typing";
import { searchAnswer } from "./smartSearch";
import type { Message } from "./types";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "🌾 Welcome to CocoFresh Agri Concierge.\nHow can our expert cultivation AI assist your harvest today?",
      time: getFormattedTime(),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const currentInput = input;
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: currentInput,
      time: getFormattedTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: searchAnswer(currentInput),
        time: getFormattedTime(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? "is-open" : ""}`}>
      {/* Premium Luxury Farmer AI Single Trigger Button */}
      <button 
        className={`farmer-ai-trigger ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Farmer AI Concierge"
      >
        <div className="harvest-glow-aura"></div>
        <div className="trigger-content">
          {isOpen ? (
            <svg className="close-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <div className="farmer-core-icon">
              <span className="sprout-main">🌱</span>
              <span className="harvest-accent">🌾</span>
            </div>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="chatbot-container ultimate-glass-farmer">
          {/* Luxury Agri Header */}
          <div className="chat-header">
            <div className="header-info">
              <div className="bot-avatar-container">
                <span className="bot-avatar">🌱</span>
                <span className="live-pulse"></span>
              </div>
              <div>
                <h4>CocoFresh Agri AI</h4>
                <p className="status">Eco Elite Intelligence</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="chat-body">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <Typing />}
            <div ref={bottomRef}></div>
          </div>

          {/* Footer */}
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask our agri concierge..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button className="send-btn" onClick={sendMessage} disabled={!input.trim()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}