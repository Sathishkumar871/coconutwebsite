import { chatbotData, getEstimatedDelivery } from "./chatbotData";

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
  const rawInput = message.toLowerCase();
  const input = applyCorrections(message);

  // 1. Check for location-based delivery estimation query (Dynamic Date Calculation)
  if (
    rawInput.includes("delivery") || 
    rawInput.includes("delivary") || 
    rawInput.includes("shipping") || 
    rawInput.includes("when will") || 
    rawInput.includes("transit") ||
    rawInput.includes("reach") ||
    rawInput.includes("days")
  ) {
    if (
      rawInput.includes("hyderabad") || 
      rawInput.includes("hyd") || 
      rawInput.includes("secunderabad") || 
      rawInput.includes("andhra") || 
      rawInput.includes("ap") || 
      rawInput.includes("telangana") || 
      rawInput.includes("tg") || 
      rawInput.includes("vizag") || 
      rawInput.includes("vijayawada") ||
      rawInput.includes("guntur") ||
      rawInput.includes("bangalore") ||
      rawInput.includes("chennai") ||
      rawInput.includes("mumbai") ||
      rawInput.includes("delhi") ||
      rawInput.includes("india")
    ) {
      return getEstimatedDelivery(rawInput, new Date());
    }
  }

  // 2. Exact / Contains Match
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

  // 3. Word Match Score
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

• Coconut / Tender Coconut
• Cashew / Kaju
• Guntur Chilli & Spices
• Today's Price & Quotation
• Delivery & Location Timelines (e.g., "Delivery to Hyderabad")
• Export & Return Policy
• Contact Details
• Bulk Orders & MOQ`;
}