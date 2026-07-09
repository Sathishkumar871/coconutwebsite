import { useState } from "react";
import "./Testimonials.css";

const allReviews = [
  { name: "Ramesh", location: "Madhapur", review: "Very fresh coconut products.", rating: 5 },
  { name: "Anitha", location: "KPHB", review: "Fast delivery, but packing could be better.", rating: 3 },
  { name: "Mahesh", location: "Siddh Nagar", review: "Best coconut supplier.", rating: 5 },
  { name: "Sunitha", location: "Bowenpally", review: "Good quality oil, nice smell.", rating: 4 },
  { name: "Vijay", location: "Vizag", review: "Order delayed by a day.", rating: 2 },
  { name: "Suresh", location: "Gachibowli", review: "Bananas are always farm fresh.", rating: 5 },
  { name: "Kavitha", location: "Vijayawada", review: "Reasonable prices, happy with it.", rating: 4 },
  { name: "Rajesh", location: "LB Nagar", review: "Average quality, expected more.", rating: 3 },
];

function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);

  // నక్షత్రాలను రికార్డ్ చేసే ఫంక్షన్
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <span>TESTIMONIALS</span>
          <h2>Happy Customers</h2>
        </div>

        <div className="testimonial-grid">
          {allReviews.slice(0, visibleCount).map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">{renderStars(item.rating)}</div>
              <p>"{item.review}"</p>
              <h3>{item.name}</h3>
              <span className="location">{item.location}</span>
            </div>
          ))}
        </div>

        {visibleCount < allReviews.length && (
          <button className="view-more-btn" onClick={() => setVisibleCount(visibleCount + 3)}>
            Load More Reviews
          </button>
        )}
      </div>
    </section>
  );
}

export default Testimonials;