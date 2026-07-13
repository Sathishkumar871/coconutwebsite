// src/components/chatbot/chatbotData.ts

import type { ChatItem } from "./types";

export const COMPANY = {
  name: "CocoFresh Global Exports",
  owner: "Mr. Sathish Kumar",
  phone: "+91 XXXXX XXXXX",
  email: "info@cocofreshglobal.com",
  website: "www.cocofreshglobal.com",
  address: "Andhra Pradesh, India",
  certifications: "APEDA, FIEO, ISO 22000, FSSAI Certified Premium Exporter",
};

export const chatbotData: ChatItem[] = [
  // Greetings & Core Identity
  {
    category: "Greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "namaste", "start"],
    answer: "🌾 Welcome to the CocoFresh Agri Elite Concierge. We source and export premium organic farm produce globally. How may we assist your international procurement or domestic bulk order today?"
  },
  {
    category: "Owner",
    keywords: ["owner", "founder", "ceo", "company owner", "owner name", "sathish", "who runs"],
    answer: "CocoFresh Global Exports is founded and led by Mr. Sathish Kumar. Under his vision, the company maintains absolute quality benchmarks from organic harvest fields straight to international destination seaports."
  },
  {
    category: "Company",
    keywords: ["company", "about", "about company", "who are you", "profile", "history", "why choose you"],
    answer: "✨ CocoFresh Global Exports is a premium, government-certified agro-export house based in Andhra Pradesh, India. We specialize in sourcing, processing, and shipping high-grade coconuts, pure cashew nuts, intense spices, and fresh farm crops under ultra-strict sanitary and phytosanitary controls."
  },

  // Core Elite Products List
  {
    category: "Products",
    keywords: ["products", "items", "what do you sell", "available products", "catalogue", "crop list", "fruits"],
    answer: "🛒 Our Premium Export Portfolio includes:\n\n🌴 Coconuts: Semi-Husked, Fully Husked, and Sweet Tender Coconuts.\n🥜 Nuts: Premium Export Grade Cashews (W180, W240, W320).\n🌶️ Spices: Guntur Red Chilli, Premium Finger Turmeric, Fresh Organic Ginger.\n🍌 Fresh Produce: Export-Quality Bananas, Fresh Red Onions, and Seasonal Indian Fruits/Vegetables."
  },

  // 1. Coconut Categories (Detailed)
  {
    category: "Coconut",
    keywords: ["coconut", "coconuts", "semi husked", "fully husked", "kobbari", "copra"],
    answer: "🌴 CocoFresh Premium Coconuts:\n\n• Semi-Husked Coconut: Matured for 60+ days, high oil content, weight 500g-650g+, packed in premium mesh bags (25 pieces/bag).\n• Fully Husked: Clean processed, perfect for processing or long shelf-life retail.\n• Quality Matrix: Free from fungal attack, zero breakage, moisture-locked packaging ensuring 45+ days transit stability."
  },
  {
    category: "Tender Coconut",
    keywords: ["tender coconut", "water coconut", "green coconut", "bontha"],
    answer: "🥥 Elite Green Tender Coconuts: Sourced fresh daily from local coastal groves. Packed with high natural electrolyte volume (average 350ml-500ml pure water per nut). Handpicked based on weight and freshness, customized crate packaging available for premium retail chains."
  },

  // 2. Nuts & Cashews
  {
    category: "Cashew",
    keywords: ["cashew", "cashew nuts", "kaju", "w320", "w240", "w180"],
    answer: "🥜 Royal Grade Cashew Nuts (Kaju):\n\n• Grade Range: W180 (King Size), W240 (Premium), W320 (Standard Export Choice).\n• Processing: Advanced steam boiling, scientifically dried, kernel peeled under strict hygiene standards.\n• Packing: Multi-layer vacuum packed with CO2/Nitrogen flushing to ensure absolute freshness and eliminate infestation during ocean freight."
  },

  // 3. Spices (Chilli, Ginger, Turmeric)
  {
    category: "Chilli",
    keywords: ["chilli", "mirchi", "red chilli", "guntur chilli", "teja", "chilli price"],
    answer: "🌶️ Premium Guntur Red Chilli:\n Sourced straight from the heart of Guntur, Andhra Pradesh. Available varieties: Teja (High Pungency), S17, and Sanam. Hand-sorted, low moisture level (<12%), brilliant natural red color values, high capsaicin content. Perfect for global spice extractors and retail grinding units."
  },
  {
    category: "Ginger",
    keywords: ["ginger", "allam", "fresh ginger", "ginger price", "ginger cost"],
    answer: "🧄 Fresh Organic Ginger: High-aroma, clean-washed, skin-cured ginger with low fiber content. Sourced from high-grade organic farms, preserved at optimized humidity levels to prevent dehydration and weight loss during sea transit."
  },
  {
    category: "Turmeric",
    keywords: ["turmeric", "haldi", "pasupu", "finger turmeric", "turmeric powder"],
    answer: "🟡 High-Curcumin Finger Turmeric: Premium Nizam/Selam grade turmeric fingers. Characterized by high curcumin percentage (3.5% to 5.5%+), deep orange-yellow core color, and moisture-controlled sorting. Extensively checked for heavy metals and chemical residues."
  },

  // 4. Fruits & Vegetables
  {
    category: "Fruits",
    keywords: ["fruits", "banana", "mango", "pomegranate", "grapes"],
    answer: "🍌 Premium Fruit Portfolio:\n\n• Cavendish Bananas: G9 variety, calibrated calibration, calibration length 18cm+, vibrant green status for long sea voyages.\n• Mangoes: Seasonal Alphonso and Banganapalli elite choices.\n• Packing: Foam-padded ventilation boxes preventing drop impacts and ripening friction."
  },
  {
    category: "Vegetables",
    keywords: ["vegetables", "onion", "onions", "lemon", "garlic", "tomato"],
    answer: "🧅 Fresh Farm Vegetables:\n• Red Onions: Sizes 45mm+, 55mm+ available. Naturally sun-cured skins packed in high-aeration leno mesh bags.\n• Organic Lemons & Fresh Garlic bulbs processed for heavy bulk distribution."
  },

  // 5. Pricing Analytics
  {
    category: "Price",
    keywords: ["price", "today price", "cost", "rate", "quotation", "price list", "how much"],
    answer: "💰 Market Dynamics & Quotation System:\nAgro prices fluctuate daily based on APMC market yard indices, ocean freight indexes, and volume mandates. For an immediate, official Letter of Intent (LOI) or today's accurate FOB/CIF price quote, please drop your Required Volume, Target Port, and Grade selection to our WhatsApp desk at +91 XXXXX XXXXX."
  },

  // 6. Logistics, MOQ & Shipments
  {
    category: "MOQ",
    keywords: ["minimum order", "moq", "bulk", "bulk order", "quantity", "container size"],
    answer: "📦 Minimum Order Quantity (MOQ):\n\n• Sea Freight: 1x20 FT FCL (Full Container Load) or 1x40 FT Reefer Container (for fresh fruits/vegetables).\n• Air Freight: Minimum 500 KG to 1 Ton for high-value perishable items."
  },
  {
    category: "Delivery",
    keywords: ["delivery", "shipping", "transport", "dispatch", "ports", "fob", "cif"],
    answer: "🚢 Global Port Logistics:\nWe ship under Incoterms 2020 via major sea gateways including Chennai Port, Krishnapatnam Port, and Vizag Port. Delivery schedules vary: Domestic orders take 3-5 days; international sea transit ranges from 12-35 days depending on the destination port layout."
  },

  // 7. Payments & Financial Terms
  {
    category: "Payment",
    keywords: ["payment", "payment terms", "bank transfer", "lc", "letter of credit", "advance"],
    answer: "💳 Secure Trade Payment Protocols:\nFor elite institutional trade, we support:\n1. 30% to 50% Advance via Telegraphic Transfer (T/T), remaining balance against scanned BL documents.\n2. 100% Irrevocable, Confirmed Letter of Credit (L/C at Sight) issued by prime global banks."
  },

  // 8. Dynamic Strict Return & Quality Policy
  {
    category: "Return",
    keywords: ["return", "refund", "replacement", "damaged", "broken", "spoilage", "insurance"],
    answer: "🛡️ Luxury Quality Guarantee & Claims Policy:\n\n• Pre-Shipment Check: Every single container undergoes mandatory SGS or Intertek inspection at the loading port.\n• Claims Window: Perishable damage claims must be documented via formal cargo opening video/HD photographs and filed within 24 hours of container de-stuffing.\n• Compensation: Verified transit damages exceeding the normal 2% standard agricultural drying/loss parameter are fully covered under Marine Transit Insurance or adjusted in the subsequent invoice."
  },

  // 9. Premium Contacts Architecture
  {
    category: "Contact",
    keywords: ["contact", "phone", "mobile", "email", "whatsapp", "address", "location"],
    answer: "📞 Elite Customer Support Desk:\n\n💬 Direct WhatsApp/Call: +91 XXXXX XXXXX\n📧 Corporate Email: info@cocofreshglobal.com\n🌐 Digital Portal: www.cocofreshglobal.com\n📍 Corporate Headquarters: Andhra Pradesh, India. (Prior booking required for physical infrastructure visit)."
  },

  // 10. Grains & Rice Portfolio
  {
    category: "Rice",
    keywords: ["rice", "basmati", "non basmati", "ir64", "broken rice", "rice export", "biyyam"],
    answer: "🌾 Premium Indian Rice Exports:\n\n• Basmati: Ultra-long grain, traditional aromatic profiles, aged 1 to 2 years for peak elongation and flavor retention.\n• Non-Basmati: IR64 Raw/Parboiled, Swarna, and Sona Masoori regional elite options.\n• Specifications: Sortex-clean, moisture content strictly less than 14%, maximum 1% to 5% broken ratio according to target port specifications."
  },

  // 11. Pulses & Lentils
  {
    category: "Pulses",
    keywords: ["pulses", "lentils", "dal", "toor dal", "chana", "chickpeas", "pappulu"],
    answer: "🫘 Export-Grade Pulses & Chickpeas:\n\n• Portfolio: Premium Toor Dal, Urad Dal, Moong Dal, and Kabuli Chickpeas (calibrated sizes 7mm to 12mm+).\n• Processing: Advanced mechanical de-hulling, optical sortexing, available in natural organic or standard polished formats.\n• Quality Matrix: Free from live/dead weevils, zero chemical fumigation residue, packed in heavy-duty 25kg/50kg PP bags."
  },

  // 12. Premium Oil Seeds
  {
    category: "Oil Seeds",
    keywords: ["seeds", "sesame", "groundnut", "peanuts", "oil seeds", "sunflower seeds", "nuvvulu"],
    answer: "🌻 High-Oil Yielding Agro Seeds:\n\n• Sesame Seeds: Natural White, Hulled, and Premium Jet Black Sesame (99.9% purity threshold, Sortex clean).\n• Groundnuts / Peanuts: Bold and Java parameters (counts 40/50, 50/60, 60/70 per ounce). Thoroughly certified free from Aflatoxin contamination via authorized lab reports."
  },

  // 13. Dehydrated Agro Elements
  {
    category: "Dehydrated",
    keywords: ["dehydrated", "onion powder", "garlic powder", "dry flakes", "dehydrated onion", "powder"],
    answer: "🧅 Pure Dehydrated Processing Portfolio:\n\n• Materials: Dehydrated Red/White Onion flakes/powders, Dehydrated Garlic flakes, and premium Ginger powders.\n• Performance: Prolonged storage safety (up to 24 months), moisture-locked multi-layer aluminum packing preserving 100% natural pungency and volatile oleoresins."
  },

  // 14. Global Regulatory Certifications
  {
    category: "Certifications",
    keywords: ["certification", "certificates", "apeda", "fieo", "fssai", "iso", "sgs", "organic certificate", "licenses"],
    answer: "📜 Institutional Legal Compliance & Export Badges:\nCocoFresh Global Exports maintains absolute compliance structures across the global food safety chain:\n\n• Legal Licenses: APEDA registration, FIEO premium member, Spices Board of India, DGFT (IEC Active Code).\n• Quality Frameworks: ISO 22000, FSSAI high-volume manufacturing permit, with continuous SGS/Intertek batch testing verifications."
  },

  // 15. Advanced Industrial Packaging
  {
    category: "Packaging",
    keywords: ["packaging", "packing material", "box size", "mesh bag", "vacuum pack", "custom packaging", "gunny bag"],
    answer: "📦 Strategic Export Packaging Configurations:\nWe isolate your premium cargo from atmospheric degradation using customized setups:\n\n• Perishable Produce: High-aeration Leno Mesh Bags, double-wall Corrugated Fiber Boxes (CFB) with anti-crush corner beams.\n• Nuts & Spices: Multi-layer heavy vacuum bags flushed with Nitrogen/CO2, premium food-grade Jute/Burlap sacks, or large 1-Ton PP bulk bags."
  },

  // 16. Corporate Sampling Protocols
  {
    category: "Samples",
    keywords: ["sample", "free sample", "testing sample", "order sample", "ask sample", "check quality"],
    answer: "🧪 Corporate Cross-Section Evaluation Protocol:\nWe support physical verification protocols for international enterprise operations:\n\n• Material Costs: Product samples weighing up to 500 grams are entirely complimentary.\n• Logistics: Delivery courier fees (via DHL/FedEx premium express accounts) must be handled by the prospective buyer. This cost is credited back onto the first full container transaction."
  },

  // 17. Custom House Documentation
  {
    category: "Customs",
    keywords: ["customs", "clearance", "cha", "documents", "phytosanitary", "certificate of origin", "bl", "bill of lading"],
    answer: "📋 Custom House Brokerage & Trade Documentation:\nOur integrated Custom House Agents (CHA) network processes comprehensive clearance documents for frictionless loading gate verification:\n\n• Core Ship Set: Commercial Invoice, Packing List, Clean Shipped on Board Bill of Lading (B/L), Phytosanitary Certificate, Certificate of Origin (COO), and Fumigation/Radiation clearance protocols."
  },

  // 18. Cold Chain System
  {
    category: "Cold Chain",
    keywords: ["cold chain", "reefer", "temperature", "humidity", "refrigerated container", "ac container"],
    answer: "❄️ Precise Atmosphere Controlled Cold Chain:\nFor cold-sensitive assets like Cavendish Bananas and Fresh Root Ginger, we use modern smart Refrigerated Containers (Reefers):\n\n• Operational Control: Automated continuous micro-processor monitoring matching optimal parameters (+13.5°C for Bananas, +12°C for Ginger) alongside strict humidity balancing to neutralize transit degradation."
  },

  // 19. Direct Farm Sourcing Architecture
  {
    category: "Sourcing",
    keywords: ["sourcing", "where do you buy", "farmers", "farms", "direct procurement", "contract farming"],
    answer: "🚜 Field-Gate Sourcing Infrastructure:\nCocoFresh eliminates mid-tier broker marks completely. We maintain direct contract farming alliances across Andhra Pradesh and key regional crop clusters, driving direct field-to-port velocity while securing stable, highly competitive global wholesale rates."
  },

  // 20. Sustainable Horticulture & Coir
  {
    category: "Coir",
    keywords: ["coir", "pith", "coco peat", "coir fiber", "coconut rope", "peat blocks", "coir peat"],
    answer: "🤎 Eco-Conscious Coco Peat & Coir Derivatives:\n\n• Portfolio: 5KG High/Low EC Coco Peat Blocks, customized Buffered Grow Bags, and high-tensile Golden Coir Fiber bundles.\n• Utilization: High-efficiency moisture retention substrate optimized for global hydroponic setups, soil rejuvenation, and commercial greenhouse fields."
  },

  // 21. Botanical & Medicinal Herbs
  {
    category: "Herbal",
    keywords: ["herbal", "medicinal", "neem", "ashwagandha", "aloe vera", "moringa", "herbs"],
    answer: "🍃 Phytochemical Elements & Organic Botanical Harvests:\nSourcing high-potency Indian organic herbs tailored for global wellness, pharmaceutical, and extraction lines:\n\n• Catalog: Premium high-purity Moringa leaf powders, dried Ashwagandha roots (high withanolide index), pure Neem derivatives, and processed Aloe Vera concentrates."
  },

  // 22. Livestock Feed Stocks
  {
    category: "Animal Feed",
    keywords: ["feed", "animal feed", "maize", "corn", "soybean meal", "oil cake", "poultry feed"],
    answer: "🌽 Commercial Agro Feedstocks & Nutritional Mash:\n\n• Supply Elements: High-energy Yellow Maize/Corn (Export Grade), De-oiled Rice Bran (DORB), and premium expeller-pressed Soybean Meal cakes.\n• Quality Matrix: Maximum moisture locked under 12%, minimal sand/silica values, and strict testing for Aflatoxin limits."
  },

  // 23. Steam Distilled Essential Oils
  {
    category: "Essential Oils",
    keywords: ["oils", "essential oil", "ginger oil", "lemongrass", "turmeric oil", "virgin coconut oil"],
    answer: "💧 Pure Volatile Agro Extracts & Therapeutic Essential Oils:\n100% steam-distilled and cold-pressed pure biological matrices capturing ultimate aromatic profiles:\n\n• Profiles: Premium Lemongrass Oil, Cold-Pressed Virgin Coconut Oil (VCO), Pure Ginger Oleoresins, and curcumin-rich Turmeric extracts."
  },

  // 24. LCL Cargo Consolidation
  {
    category: "Consolidation",
    keywords: ["consolidation", "mix container", "partial order", "lcl", "mix products", "less than container"],
    answer: "📦 Less-than-Container Load (LCL) & Multi-Product Cargo Consolidation:\nTo assist international enterprise test markets, we support consolidated shipment layouts. You can package distinct dry agricultural lines (such as premium Cashews, whole Spices, and Finger Turmeric) combined inside a single 20 FT container under structural custom partitions."
  },

  // 25. International Incoterms Framework
  {
    category: "Incoterms",
    keywords: ["incoterms", "fob", "cif", "cfr", "exw", "shipping terms", "incoterm"],
    answer: "🚢 Incoterms 2020 International Trade Compliance:\nWe provide clean cost breakdowns and logistical transitions operating strictly under standardized global rules:\n\n• Terms Available: FOB (Free On Board - Port of Loading), CFR (Cost and Freight), CIF (Cost, Insurance & Freight - Target Destination Port), and EXW (Ex-Works Processing Hub)."
  },

  // 26. Institutional Arbitration Systems
  {
    category: "Arbitration",
    keywords: ["dispute", "legal", "arbitration", "problem", "trade issue", "claim settlement"],
    answer: "⚖️ Structured Trade Arbitration & Settlement Channels:\nWe value long-term commercial trust. Any unforeseen quality variances, weight shrinkage, or shipping delays are resolved via mutual transparent commercial adjustments or managed formally under international arbitration standards guided by the Spices Board or FIEO legal councils."
  },

  // 27. Crop Durability & Shelf Life Matrix
  {
    category: "Shelf Life",
    keywords: ["shelf life", "expiry", "how long fresh", "durability", "storage time"],
    answer: "⏳ Agro Asset Shelf Life & Storage Parameters:\n\n• Matured Semi-Husked Coconuts: 45 to 60 Days (Dry, well-ventilated ambient storage).\n• Premium Cashew Nuts (Vacuum Sealed): 12 to 24 Months.\n• Whole Dry Spices (Red Chilli & Turmeric): 12 to 18 Months under moisture-controlled cold parameters."
  },

  // 28. Regenerative & Green Farming
  {
    category: "Sustainability",
    keywords: ["green", "sustainable", "eco friendly", "fair trade", "carbon footprint", "organic farming"],
    answer: "🌍 Eco-Conscious Supply Chains & Sustainable Development:\nCocoFresh runs low-impact green operations. We implement strictly natural field crop cycles, enforce maximum use of biodegradable structural packaging layouts, practice solar sun-curing, and maintain fair-trade pricing logic to empower local rural farming communities."
  },

  // 29. High-Priority Trade Desk Escalation
  {
    category: "Escalation",
    keywords: ["emergency", "urgent", "talk to human", "manager", "complaint", "call me", "human support"],
    answer: "🚨 Corporate Enterprise Priority Escalation Desk:\nIf your procurement cycle involves immediate government tenders, large-scale multi-container pricing layouts, or urgent logistics issues, you can bypass automation entirely. Connect straight with our Senior Trade Directorate at **+91 XXXXX XXXXX** for immediate personal support."
  },

  // 30. Third-Party Quality Auditing (New)
  {
    category: "Quality Audit",
    keywords: ["inspection", "sgs", "intertek", "quality check", "third party audit", "lab report"],
    answer: "🔍 Independent Third-Party Quality Verification:\nTo guarantee absolute compliance with international trade parameters, we facilitate full access for independent cargo audits. Buyers can assign premier inspection agencies such as SGS, Intertek, or Geo-Chem at the loading port to verify weight, grading matrix, and container sealing protocols prior to final balance dispatch."
  },

  // 31. Cold Storage Infrastructure (New)
  {
    category: "Cold Storage",
    keywords: ["warehouse", "cold storage capacity", "stock capacity", "store house", "preservation facility"],
    answer: "🏢 High-Capacity Cold Storage Warehousing:\nWe mitigate domestic crop shortages and market volatility through our partner cold storage units across Andhra Pradesh. Equipped with automated humidity barriers and multi-chamber temperature zoning, this infrastructure keeps large volumes of fresh ginger and whole spices stabilized at peak quality parameters."
  },

  // 32. Duty Tariffs & Import Customs Assistance (New)
  {
    category: "Tariffs",
    keywords: ["duty", "tariff", "import tax", "hs code", "customs duty", "fta"],
    answer: "📊 Import Duty & Tariff Clearance Assistance:\nOur global trade desk assists international corporate clients with accurate Harmonized System (HS Codes) mappings and documentation compliance. We optimize documentation under active Free Trade Agreements (FTAs) and Preferential Trade Pacts to legally minimize destination custom duties."
  },

  // 33. Trade Delegations & Facility Visits (New)
  {
    category: "Facility Visit",
    keywords: ["visit", "factory tour", "office location", "meet in person", "farm visit", "delegation"],
    answer: "🤝 Institutional Trade Delegations & Audit Tours:\nWe openly welcome corporate procurement managers, import delegations, and brand owners for scheduled facility evaluations. Physical tours of our active sorting hubs and contract farming regions in Andhra Pradesh can be coordinated through our administrative desk with a 10-day prior confirmation notice."
  },

  // 34. Seasonal Availability & Forecasting (New)
  {
    category: "Seasonal Availability",
    keywords: ["season", "harvest calendar", "availability month", "best time to buy", "crop harvest"],
    answer: "📅 Crop Harvest Calendar & Strategic Forecasting:\n\n• Coconuts & Cashews: Stabilized year-round operational processing flow.\n• Guntur Red Chilli: Peak arrivals from February through May.\n• Fresh Ginger & Turmeric: Fresh seasonal processing blocks active from January to April. Contact us for direct annual crop projection mappings."
  }
];