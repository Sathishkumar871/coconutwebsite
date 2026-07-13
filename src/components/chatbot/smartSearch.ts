// src/components/chatbot/smartSearch.ts

import { chatbotData } from "./chatbotData";

const normalize = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ");
};

// Common spelling corrections
const corrections: Record<string, string> = {
  cocnut: "coconut",
  cokonut: "coconut",
  kokonut: "coconut",
  coconat: "coconut",

  gingr: "ginger",
  giner: "ginger",

  kaju: "cashew",
  cashu: "cashew",

  haldi: "turmeric",

  retrun: "return",
  retun: "return",

  delivary: "delivery",
  dilivery: "delivery",

  prise: "price",
  prisee: "price",
  coast: "cost",
};

function applyCorrections(text: string): string {
  let result = normalize(text);

  Object.keys(corrections).forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, "g");
    result = result.replace(regex, corrections[key]);
  });

  return result;
}

export function searchAnswer(message: string): string {
  const input = applyCorrections(message);

  // Exact / Contains Match
  for (const item of chatbotData) {
    for (const keyword of item.keywords) {
      const key = normalize(keyword);

      if (
        input === key ||
        input.includes(key) ||
        key.includes(input)
      ) {
        return item.answer;
      }
    }
  }

  // Word Match Score
  let bestScore = 0;
  let bestAnswer = "";

  const words = input.split(" ");

  chatbotData.forEach((item) => {
    let score = 0;

    item.keywords.forEach((keyword) => {
      const k = normalize(keyword);

      words.forEach((word) => {
        if (k.includes(word)) score++;
      });
    });

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  });

  if (bestScore > 0) {
    return bestAnswer;
  }

  return `Sorry, I couldn't understand your question.

You can ask about:

• Coconut
• Cashew
• Ginger
• Turmeric
• Today's Price
• Delivery
• Export
• Return Policy
• Contact Details
• Bulk Orders`;
}