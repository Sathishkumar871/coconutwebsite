// src/components/chatbot/chatbotData.ts

export interface ChatItem {
  category: string;
  keywords: string[];
  answer: string;
}

export const COMPANY = {
  name: "GreensBasket Global Exports",
  owner: "Mr. Sathish Kumar",
  phone: "+91 XXXXX XXXXX",
  email: "greensbaskethub@.com",
  address: "Andhra Pradesh, India",
  certifications: "APEDA, FIEO, ISO 22000, FSSAI Certified Premium Exporter",
};

/**
 * Helper function to estimate delivery date based on user location and order date.
 * Default order date is today if not passed.
 */
export const getEstimatedDelivery = (location: string, orderDate: Date = new Date()): string => {
  const loc = location.toLowerCase();
  let minDays = 3;
  let maxDays = 5;
  let summary = "";

  if (loc.includes("hyderabad") || loc.includes("hyd") || loc.includes("secunderabad")) {
    minDays = 1;
    maxDays = 1;
    summary = "🚀 **Express Metro Corridor (Hyderabad):** Guaranteed arrival within **24 Hours (Next Day)**!";
  } else if (loc.includes("andhra") || loc.includes("ap") || loc.includes("telangana") || loc.includes("tg") || loc.includes("vizag") || loc.includes("vijayawada") || loc.includes("guntur")) {
    minDays = 1;
    maxDays = 2;
    summary = "⚡ **Local Hub Direct Transit (AP & TG):** Dispatch within 12 hours, delivery within **24 - 48 Hours**.";
  } else if (loc.includes("bangalore") || loc.includes("chennai") || loc.includes("karnataka") || loc.includes("tamil nadu") || loc.includes("kerala")) {
    minDays = 2;
    maxDays = 3;
    summary = "🚚 **South India Zone:** Priority dispatch, delivery within **2 - 3 Days**.";
  } else if (loc.includes("mumbai") || loc.includes("delhi") || loc.includes("kolkata") || loc.includes("gujarat") || loc.includes("maharashtra") || loc.includes("india")) {
    minDays = 3;
    maxDays = 5;
    summary = "🇮🇳 **Pan-India Interstate Transit:** Express logistics network, delivery within **3 - 5 Days**.";
  } else {
    return "🚢 **International Sea Freight:** 12 - 35 Days based on destination port (FOB/CIF terms available).";
  }

  const startDate = new Date(orderDate);
  startDate.setDate(startDate.getDate() + minDays);

  const endDate = new Date(orderDate);
  endDate.setDate(endDate.getDate() + maxDays);

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedStart = startDate.toLocaleDateString('en-IN', options);
  const formattedEnd = endDate.toLocaleDateString('en-IN', options);

  const dateRange = minDays === maxDays ? formattedStart : `${formattedStart} - ${formattedEnd}`;

  return `${summary}\n\n🗓️ **If ordered today (${orderDate.toLocaleDateString('en-IN', options)}):**\nExpected Delivery Date: **${dateRange}**`;
};

export const chatbotData: ChatItem[] = [
  // Greetings & Core Identity
  {
    category: "Greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "namaste", "start", "helo", "hlo"],
    answer: "🌾 Welcome to CocoFresh Agri Elite Concierge! We source and export premium farm produce globally and fulfill domestic bulk orders with express dispatch.\n\nHow can we help you today with catalog pricing, order tracking, or estimated delivery times?"
  },
  {
    category: "Owner",
    keywords: ["owner", "founder", "ceo", "company owner", "owner name", "sathish", "who runs", "proprietor"],
    answer: "CocoFresh Global Exports is founded and led by **Mr. Sathish Kumar**. Under his vision, we maintain absolute quality benchmarks from farm harvest straight to domestic buyers and international seaports."
  },
  {
    category: "Company",
    keywords: ["company", "about", "about company", "who are you", "profile", "history", "why choose you", "cocofresh"],
    answer: "✨ CocoFresh Global Exports is a premium, government-certified agro-exporter based in Andhra Pradesh, India. We specialize in sourcing, processing, and supplying high-grade coconuts, pure cashews, Guntur spices, fresh fruits, and food grains under strict sanitary controls."
  },

  // 1. Order Status & Delivery Estimation Matrix
  {
    category: "Delivery Timeline",
    keywords: [
      "delivery", "delivery time", "when will i get", "how many days", "transit time", "dispatch time", 
      "delvery", "shipping time", "expected date", "hyderabad delivery", "andhra delivery", "speed"
    ],
    answer: `🚚 **CocoFresh Smart Delivery Matrix (India-Wide & Global):**

• **Hyderabad Metro:** Next-Day Delivery (**Within 24 Hours**)!
• **Andhra Pradesh & Telangana:** Express Direct (**24 to 48 Hours**).
• **South India (Chennai, Bangalore, Kerala):** **2 to 3 Days**.
• **Rest of India (North / West / East):** Standard Priority Express (**3 to 5 Days**).
• **International Sea Freight:** **12 to 35 Days** (Port dependent).

💡 *Pro Tip:* Share your location or PIN code right here to calculate your exact expected delivery date!`
  },
  {
    category: "Order Tracking",
    keywords: [
      "order status", "track order", "where is my order", "order date", "order check", 
      "tracking", "status", "order tracking", "my order", "ordr"
    ],
    answer: "📦 **Live Order Tracking & Support:**\n\nTo check your active shipment status or verify estimated arrival:\n1. Share your **Order ID** or **Registered Mobile Number**.\n2. Or ping our dispatch desk instantly on WhatsApp at **+91 XXXXX XXXXX** for real-time GPS tracking of your cargo truck/container."
  },

  // 2. Core Products Catalogue
  {
    category: "Products",
    keywords: ["products", "items", "what do you sell", "available products", "catalogue", "crop list", "fruits", "produc", "item list"],
    answer: "🛒 **Our Premium Export & Bulk Portfolio:**\n\n🌴 **Coconuts:** Semi-Husked, Fully Husked, Fresh Green Tender Coconuts.\n🥜 **Cashew Nuts:** Premium Export Grade Cashews (W180, W240, W320).\n🌶️ **Spices:** Guntur Red Chilli (Teja/S17), Nizam Finger Turmeric, Fresh Organic Ginger.\n🍌 **Fresh Produce:** Cavendish Bananas (G9), Banganapalli Mangoes, Red Onions (45mm+).\n🌾 **Grains & Pulses:** Basmati & Non-Basmati Rice, Toor Dal, Chickpeas, Sesame Seeds."
  },

  // 3. Coconut Categories
  {
    category: "Coconut",
    keywords: ["coconut", "coconuts", "semi husked", "fully husked", "kobbari", "copra", "coconat", "coconu"],
    answer: "🌴 **CocoFresh Premium Coconuts:**\n\n• **Semi-Husked Coconut:** Matured 60+ days, high oil & water content, weight 500g-650g+, packed in 25-piece mesh bags.\n• **Fully Husked:** Clean processed, ideal for food processing or long shelf-life bulk storage.\n• **Quality:** Free from fungal attack, zero breakage, 45+ days shelf stability."
  },
  {
    category: "Tender Coconut",
    keywords: ["tender coconut", "water coconut", "green coconut", "bontha", "tender", "elaneer"],
    answer: "🥥 **Elite Green Tender Coconuts:** Sourced fresh daily from coastal groves. Packed with 350ml-500ml pure natural electrolyte water per nut. Handpicked for weight, customized crate packaging available."
  },

  // 4. Nuts & Cashews
  {
    category: "Cashew",
    keywords: ["cashew", "cashew nuts", "kaju", "w320", "w240", "w180", "casew", "kajoo"],
    answer: "🥜 **Royal Grade Cashew Nuts (Kaju):**\n\n• **Grades:** W180 (King Size), W240 (Premium Large), W320 (Standard Choice).\n• **Processing:** Steam boiled, scientifically dried, hygienic kernel peeling.\n• **Packing:** Multi-layer vacuum packaging with CO2/Nitrogen flushing to guarantee zero infestation."
  },

  // 5. Spices
  {
    category: "Chilli",
    keywords: ["chilli", "mirchi", "red chilli", "guntur chilli", "teja", "chilli price", "chili", "chily", "mirci"],
    answer: "🌶️ **Premium Guntur Red Chilli:** Direct from Guntur AP yard. Varieties: Teja (High Pungency), S17, Sanam. Hand-sorted, low moisture (<12%), rich natural red color (ASTA values), high capsaicin content."
  },
  {
    category: "Ginger",
    keywords: ["ginger", "allam", "fresh ginger", "ginger price", "gingr", "allam price"],
    answer: "🧄 **Fresh Organic Ginger:** Clean-washed, skin-cured ginger with low fiber content. Preserved at controlled humidity to prevent weight loss or dehydration during transit."
  },

  // 6. Pricing & Quotation
  {
    category: "Price",
    keywords: ["price", "today price", "cost", "rate", "quotation", "price list", "how much", "pribe", "rat"],
    answer: "💰 **Market Dynamics & Today's Rates:**\nAgro commodity prices update daily according to APMC market yards and freight indices.\n\nFor today's exact quote (FOB/CIF or Domestic Bulk Door-Delivery), send your **Product Name, Required Volume, and Destination City/Port** to **+91 XXXXX XXXXX**."
  },

  // 7. MOQ & Logistics
  {
    category: "MOQ",
    keywords: ["minimum order", "moq", "bulk", "bulk order", "quantity", "container size", "min order"],
    answer: "📦 **Minimum Order Quantities (MOQ):**\n\n• **Domestic Bulk (India):** Starts from 500 KG to 1 Ton.\n• **Air Freight:** 500 KG to 1 Ton for high-value perishables.\n• **Sea Freight:** 1x20 FT FCL or 1x40 FT Reefer Container."
  },

  // 8. Payment Terms
  {
    category: "Payment",
    keywords: ["payment", "payment terms", "bank transfer", "lc", "letter of credit", "advance", "pay"],
    answer: "💳 **Secure Payment Protocols:**\n\n• **Domestic Orders:** UPI, IMPS/NEFT, Bank Transfer.\n• **Export Orders:**\n  1. 30%-50% Advance (T/T), balance against scanned Bill of Lading (B/L).\n  2. 100% Irrevocable, Confirmed L/C at Sight issued by prime global banks."
  },

  // 9. Contact Info
  {
    category: "Contact",
    keywords: ["contact", "phone", "mobile", "email", "whatsapp", "address", "location", "contct", "numbr"],
    answer: "📞 **CocoFresh Support Desk:**\n\n💬 **WhatsApp / Call:** +91 XXXXX XXXXX\n📧 **Email:** info@cocofreshglobal.com\n🌐 **Website:** www.cocofreshglobal.com\n📍 **HQ:** Andhra Pradesh, India."
  }
];