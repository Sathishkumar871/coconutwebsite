// src/components/chatbot/types.ts

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

export interface ChatItem {
  keywords: string[];
  answer: string;
  category: string;
}

export interface Suggestion {
  text: string;
}

export interface BotState {
  isTyping: boolean;
  isOpen: boolean;
}

export interface ChatSettings {
  companyName: string;
  owner: string;
  supportEmail: string;
  supportPhone: string;
  website: string;
}

export interface SearchResult {
  found: boolean;
  answer: string;
}

export type Sender = "user" | "bot";