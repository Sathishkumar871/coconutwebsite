import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: "🌴",
    title: "Farm Fresh",
    description: "Fresh harvested directly from our farms.",
  },
  {
    id: 2,
    icon: "🌱",
    title: "100% Organic",
    description: "Natural and chemical-free products.",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Fast Delivery",
    description: "Safe and quick delivery across India.",
  },
  {
    id: 4,
    icon: "⭐",
    title: "Premium Quality",
    description: "Export-quality products at the best price.",
  },
  {
    id: 5,
    icon: "🤝",
    title: "Trusted Supplier",
    description: "Thousands of satisfied customers and businesses.",
  },
  {
    id: 6,
    icon: "💰",
    title: "Best Price",
    description: "Affordable prices with excellent quality.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">

        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Why Customers Choose Our Products</h2>
          <p>
            We deliver fresh, premium-quality  products with trusted
            service and competitive prices.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;