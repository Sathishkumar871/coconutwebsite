import React from "react";
import "./OfferBanner.css";

// మీ బిజినెస్ కి సంబంధించిన 5 ప్రీమియం ఆఫర్స్
const offers: string[] = [
  "🥥 Premium Semi Husked Coconuts - Direct Farm Fresh Bulk Supply!",
  "🎉 Special Offer: Get 5% OFF on Semi Husked Coconut Bulk Orders Above 1000 Pcs!",
  "🚚 Fast & Reliable Transit to Vijayawada, Visakhapatnam & Hyderabad more cities",
  "⭐ Export & Wholesale Quality Semi Husked Coconuts at Unbeatable Market Prices!",
  "📞 Order Your Semi Husked Coconut Consignment Today - Best Rates Guaranteed!"
];

const OfferBanner: React.FC = () => {
  return (
    <section className="offer-banner">
      
      {/* లెఫ్ట్ సైడ్ లో పరిగెత్తే (Rolling & Bouncing) కొబ్బరికాయ */}
      <div className="running-coconut">
        <span className="coconut-icon">🥥</span>
      </div>

      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...offers, ...offers].map((offer, index) => (
            <div className="ticker-item" key={index}>
              <span className="offer-text">{offer}</span>
              <span className="separator">✦</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default OfferBanner;