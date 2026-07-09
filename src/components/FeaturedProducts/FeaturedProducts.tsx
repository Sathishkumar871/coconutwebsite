import React, { useState } from "react";
import "./FeaturedProducts.css";

// --- Types ---
type Language = "en" | "te" | "hi";

interface LocalizedText {
  en: string;
  te: string;
  hi: string;
}

interface Product {
  id: number;
  image: string;
  name: LocalizedText;
  price: LocalizedText;
  origin: LocalizedText;
  grade: LocalizedText;
  description: LocalizedText;
}

// --- Static UI Translations ---
const uiTranslations = {
  sectionTag: { en: "FEATURED PRODUCTS", te: "ముఖ్యమైన ఉత్పత్తులు", hi: "प्रमुख उत्पाद" },
  sectionTitle: { en: "Our Best Selling Products", te: "మా అత్యధికంగా అమ్ముడయ్యే ఉత్పత్తులు", hi: "हमारे सबसे अधिक बिकने वाले उत्पाद" },
  sectionDesc: { 
    en: "Premium quality agricultural products sourced directly from trusted farms, supplying the highest grades to Hyderabad and beyond.", 
    te: "హైదరాబాద్ మరియు ఇతర ప్రాంతాలకు సప్లై చేయడానికి, విశ్వసనీయ రైతుల నుండి నేరుగా సేకరించిన ఎక్స్‌పోర్ట్ క్వాలిటీ వ్యవసాయ ఉత్పత్తులు.", 
    hi: "हैदराबाद और अन्य क्षेत्रों में आपूर्ति के लिए विश्वसनीय किसानों से सीधे प्राप्त उच्च गुणवत्ता वाले कृषि उत्पाद।" 
  },
  viewBtn: { en: "View Product", te: "ఉత్పత్తిని చూడండి", hi: "उत्पाद देखें" },
  originLabel: { en: "📍 Origin:", te: "📍 సప్లై అయ్యే ప్రాంతం:", hi: "📍 उत्पत्ति:" },
  gradeLabel: { en: "⭐ Quality/Grade:", te: "⭐ నాణ్యత/గ్రేడ్:", hi: "⭐ गुणवत्ता/ग्रेड:" },
  detailsLabel: { en: "📝 Details:", te: "📝 వివరాలు:", hi: "📝 विवरण:" },
  enquireBtn: { en: "Enquire Now", te: "ఇప్పుడే విచారించండి", hi: "अभी पूछताछ करें" }
};

// --- Products Data (Multi-Language) ---
const products: Product[] = [
  {
    id: 1,
    image: "/images/products/tender-coconut.png",
    name: { en: "Tender Coconut", te: "లేత కొబ్బరి (బొండాలు)", hi: "कच्चा नारियल (पानी वाला)" },
    price: { en: "₹31 / piece", te: "₹31 / కాయ", hi: "₹31 / पीस" },
    origin: { en: "eluru (andhra pradesh) & Konaseema", te: "మద్దూర్ (కర్ణాటక) & కోనసీమ", hi: "मद्दूर (कर्नाटक) और कोनासीमा" },
    grade: { en: "Premium Grade A", te: "ప్రీమియం గ్రేడ్ A", hi: "प्रीमियम ग्रेड A" },
    description: { 
      en: "Pure, sweet water tender coconuts directly from farmers.", 
      te: "స్వచ్ఛమైన, తీపి నీటితో ఉండే లేత కొబ్బరి బొండాలు. నేరుగా రైతుల నుండి సేకరించబడుతుంది.", 
      hi: "किसानों से सीधे प्राप्त शुद्ध और मीठे पानी वाले कच्चे नारियल।" 
    }
  },
  {
    id: 2,
    image: "/images/products/fresh-coconut.png",
    name: { en: "Fresh Coconut", te: "కొబ్బరికాయ", hi: "ताजा नारियल" },
    price: { en: "₹35 / piece", te: "₹35 / కాయ", hi: "₹35 / पीस" },
    origin: { en: "Amalapuram, East Godavari", te: "అమలాపురం, తూర్పు గోదావరి", hi: "अमलापुरम, पूर्वी गोदावरी" },
    grade: { en: "Big Size, High Oil Content", te: "పెద్ద సైజు, ఎక్కువ నూనె శాతం", hi: "बड़ा आकार, अधिक तेल की मात्रा" },
    description: { 
      en: "Ideal for cooking and religious purposes. Thick meat and long shelf life.", 
      te: "గుడికి, వంటలకు వాడే నాణ్యమైన కొబ్బరికాయలు. మందపాటి కొబ్బరి ఉంటుంది.", 
      hi: "खाना पकाने और पूजा के लिए आदर्श। गाढ़ी गरी और लंबी शेल्फ लाइफ।" 
    }
  },
  {
    id: 3,
    image: "/images/products/cashew.png",
    name: { en: "Premium Cashew", te: "జీడిపప్పు (కాజు)", hi: "प्रीमियम काजू" },
    price: { en: "₹850 / kg", te: "₹850 / కేజీ", hi: "₹850 / किलो" },
    origin: { en: "Palasa (AP) & Kerala", te: "పలాస (AP) & కేరళ", hi: "पलासा (AP) और केरल" },
    grade: { en: "W320 & W240 Whole White", te: "W320 & W240 పూర్తి తెలుపు", hi: "W320 और W240 पूरा सफेद" },
    description: { 
      en: "Export quality cashew perfect for sweet shops, bakeries, and biryani hotels.", 
      te: "హైదరాబాద్‌లోని స్వీట్ షాప్స్, బేకరీలు మరియు బిర్యానీ హోటల్స్‌కు బెస్ట్ క్వాలిటీ కాజు.", 
      hi: "मिठाई की दुकानों, बेकरी और बिरयानी होटलों के लिए निर्यात गुणवत्ता वाले काजू।" 
    }
  },
  {
    id: 4,
    image: "/images/products/banana.png",
    name: { en: "Fresh Banana", te: "అరటిపండ్లు", hi: "ताजा केला" },
    price: { en: "₹60 / dozen", te: "₹60 / డజను", hi: "₹60 / दर्जन" },
    origin: { en: "Kadapa & Anantapur", te: "కడప & అనంతపూర్", hi: "कडपा और अनंतपुर" },
    grade: { en: "Robusta / Karpura / Grand Naine", te: "రోబస్టా / కర్పూర", hi: "रोबस्टा / कर्पूरा" },
    description: { 
      en: "Naturally ripened, chemical-free bananas for wholesale fruit markets.", 
      te: "ఎటువంటి రసాయనాలు లేకుండా సహజంగా పండించిన తాజా అరటిపండ్లు.", 
      hi: "थोक फल बाजारों के लिए प्राकृतिक रूप से पके हुए, रसायन मुक्त केले।" 
    }
  },
  {
    id: 5,
    image: "/images/products/ginger.png",
    name: { en: "Fresh Ginger", te: "పచ్చి అల్లం", hi: "ताजा अदरक" },
    price: { en: "₹120 / kg", te: "₹120 / కేజీ", hi: "₹120 / किलो" },
    origin: { en: "Hassan (KA) & Zaheerabad (TS)", te: "హాసన్ (కర్ణాటక) & జహీరాబాద్ (TS)", hi: "हासन (KA) और जहीराबाद (TS)" },
    grade: { en: "Washed, Low Fiber", te: "క్లీన్ చేసిన, తక్కువ పీచు గల అల్లం", hi: "धुला हुआ, कम फाइबर" },
    description: { 
      en: "High-pungency ginger imported from Hassan and Zaheerabad. Best for hotels.", 
      te: "కర్ణాటకలోని హాసన్ మరియు జహీరాబాద్ నుండి ప్రత్యేకంగా తెప్పించిన ఘాటైన అల్లం.", 
      hi: "हासन और जहीराबाद से विशेष रूप से मंगाया गया तीखा अदरक। होटलों के लिए सर्वश्रेष्ठ।" 
    }
  },
  {
    id: 6,
    image: "/images/products/dry-ginger.png",
    name: { en: "Dry Ginger", te: "శొంఠి", hi: "सूखी अदरक (सोंठ)" },
    price: { en: "₹350 / kg", te: "₹350 / కేజీ", hi: "₹350 / किलो" },
    origin: { en: "Kerala & Karnataka", te: "కేరళ & కర్ణాటక", hi: "केरल और कर्नाटक" },
    grade: { en: "Sun-Dried, Medicinal Grade", te: "సూర్యరశ్మిలో ఎండబెట్టిన ఎక్స్‌పోర్ట్ క్వాలిటీ", hi: "धूप में सुखाया हुआ, औषधीय ग्रेड" },
    description: { 
      en: "Perfectly sun-dried ginger used for Ayurvedic medicine and spice mixes.", 
      te: "ఆయుర్వేద మందులకు, మసాలాలకు ఉపయోగించే నాణ్యమైన శొంఠి.", 
      hi: "आयुर्वेदिक चिकित्सा और मसाले के मिश्रण के लिए उपयोग की जाने वाली पूरी तरह से सूखी सोंठ।" 
    }
  },
  {
    id: 7,
    image: "/images/products/turmeric.png",
    name: { en: "Turmeric Fingers", te: "పసుపు కొమ్ములు", hi: "हल्दी (साबुत)" },
    price: { en: "₹150 / kg", te: "₹150 / కేజీ", hi: "₹150 / किलो" },
    origin: { en: "Nizamabad (TS) & Erode (TN)", te: "నిజామాబాద్ (TS) & ఈరోడ్ (TN)", hi: "निजामाबाद (TS) और इरोड (TN)" },
    grade: { en: "High Curcumin, Polished", te: "ఎక్కువ కుర్కుమిన్, పాలిష్ చేసినవి", hi: "उच्च करक्यूमिन, पॉलिश किया हुआ" },
    description: { 
      en: "Directly sourced from Nizamabad market with bright color and high curcumin.", 
      te: "నిజామాబాద్ మార్కెట్ నుండి డైరెక్ట్‌గా తెచ్చిన పసుపు కొమ్ములు. మంచి రంగు ఉంటాయి.", 
      hi: "निजामाबाद बाजार से सीधे प्राप्त, चमकीले रंग और उच्च करक्यूमिन वाली हल्दी।" 
    }
  },
  {
    id: 8,
    image: "/images/products/copra.png",
    name: { en: "Copra", te: "ఎండు కొబ్బరి (కొప్పెర)", hi: "सूखा नारियल (खोपरा)" },
    price: { en: "₹180 / kg", te: "₹180 / కేజీ", hi: "₹180 / किलो" },
    origin: { en: "Tiptur (KA) & Konaseema", te: "తిప్టూర్ (KA) & కోనసీమ", hi: "तिप्तूर (KA) और कोनासीमा" },
    grade: { en: "Edible & Milling Copra", te: "వంటలకి మరియు నూనెకి వాడే రకాలు", hi: "खाने योग्य और तेल निकालने वाला खोपरा" },
    description: { 
      en: "Perfectly dried copra, free from fungus. Ideal for oil extraction and edible use.", 
      te: "నూనె తీయడానికి మరియు వంటల్లో వాడటానికి అనువైన ఫంగస్ లేని ఎండు కొబ్బరి.", 
      hi: "फंगस मुक्त, पूरी तरह से सूखा हुआ खोपरा। तेल निकालने और खाने के लिए आदर्श।" 
    }
  }
];

const FeaturedProducts: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="featured-products">
      <div className="container">
        
        {/* Language Switcher */}
        <div className="lang-switcher">
          <label htmlFor="languageSelect">Language: </label>
          <select 
            id="languageSelect" 
            value={lang} 
            onChange={(e) => setLang(e.target.value as Language)}
          >
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>

        <div className="section-title">
          <span>{uiTranslations.sectionTag[lang]}</span>
          <h2>{uiTranslations.sectionTitle[lang]}</h2>
          <p>{uiTranslations.sectionDesc[lang]}</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name[lang]} />
              <h3>{product.name[lang]}</h3>
              <p className="price">{product.price[lang]}</p>
              <button className="view-btn" onClick={() => setSelectedProduct(product)}>
                {uiTranslations.viewBtn[lang]}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name[lang]} />
              </div>
              
              <div className="modal-details">
                <h2>{selectedProduct.name[lang]}</h2>
                <h3 className="modal-price">{selectedProduct.price[lang]}</h3>
                
                <div className="info-group">
                  <strong>{uiTranslations.originLabel[lang]}</strong>
                  <p>{selectedProduct.origin[lang]}</p>
                </div>
                
                <div className="info-group">
                  <strong>{uiTranslations.gradeLabel[lang]}</strong>
                  <p>{selectedProduct.grade[lang]}</p>
                </div>
                
                <div className="info-group">
                  <strong>{uiTranslations.detailsLabel[lang]}</strong>
                  <p>{selectedProduct.description[lang]}</p>
                </div>

                <button className="order-btn">{uiTranslations.enquireBtn[lang]}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;