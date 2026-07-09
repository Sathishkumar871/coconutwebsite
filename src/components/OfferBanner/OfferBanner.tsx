import React from "react";
import "./OfferBanner.css";

// మీ బిజినెస్ కి సంబంధించిన 5 ప్రీమియం ఆఫర్స్
const offers: string[] = [
  "🎉 Summer Special: Get 10% OFF on Bulk Tender Coconut Orders!",
  "🚚 Free Delivery in Hyderabad for Orders Above ₹5,000",
  "🥥 Premium Palasa Cashews: Flat ₹50 OFF per Kg this week",
  "🌿 100% Organic Virgin Coconut Oil - Buy 2 Get 1 Free",
  "⭐ Export Quality Spices now available at Best Wholesale Prices!"
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