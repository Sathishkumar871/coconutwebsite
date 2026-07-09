import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.css";
// మీ ఫోటోని ఇక్కడ ఇంపోర్ట్ చేయండి
import FounderImg from "../assets/founder.jpg"; 

const About: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container hero-content">
          <span className="about-tag">🌿 Nature's Purest Harvest</span>
          <h1>Welcome to CocoFresh</h1>
          <p className="hero-text">
            We are more than just a brand; we are a movement towards healthier living. 
            Committed to bringing premium, farm-fresh agricultural products—starting 
            from our signature coconut range to a variety of natural superfoods—straight 
            from trusted farmers to your family's table.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section story-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Journey</h2>
            <p>From the fertile lands of Andhra Pradesh to your kitchen.</p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>
                <strong>CocoFresh</strong> was born out of a deep-rooted commitment to bridge the 
                gap between hardworking local farming communities and health-conscious 
                consumers. In a world full of processed foods, we believe that true 
                health and wellness come from nature, untouched and unadulterated.
              </p>
              <p>
                What started as a humble initiative to deliver the finest premium coconuts 
                has now blossomed into a wider mission. Today, we carefully curate a 
                selection of farm-fresh perishables and essential natural products. 
                Every single item that carries the CocoFresh name undergoes strict hygiene, 
                quality, and ethical sourcing checks.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-box">
                <h3>100%</h3>
                <p>Natural & Pure</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Direct Farmers</p>
              </div>
              <div className="stat-box">
                <h3>Zero</h3>
                <p>Harmful Chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Values Section */}
      <section className="about-section values-section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Trust CocoFresh?</h2>
            <p>Our core values define everything we do.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🧑‍🌾</span>
              <h3>Farmer First</h3>
              <p>We source directly from farmers, ensuring they get fair prices and you get the freshest produce.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🛡️</span>
              <h3>Strict Quality Control</h3>
              <p>Every product passes through rigorous quality and hygiene checks before it reaches your home.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💯</span>
              <h3>100% Transparency</h3>
              <p>No hidden ingredients, no false claims. What you see on our label is exactly what you get.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">♻️</span>
              <h3>Eco-Friendly</h3>
              <p>We care for the planet just as much as your health, using sustainable packaging wherever possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-section about-founder">
        <div className="container">
          <div className="founder-wrapper">
            <div className="founder-image">
              <img src={FounderImg} alt="Sathish Kumar - Founder of CocoFresh" />
            </div>
            <div className="founder-content">
              <span className="designation">Message from the Founder</span>
              <h2>Sathish Kumar</h2>
              <blockquote>
                "My vision for CocoFresh has always been simple: to provide families 
                with food that is as pure as nature intended. We are building a brand 
                based on uncompromised trust, chemical-free purity, and a deep respect 
                for our farmers."
              </blockquote>
              <p>
                With deep roots in agriculture and a sharp vision for modern supply chain 
                efficiency, Sathish leads CocoFresh's mission to revolutionize how fresh 
                produce reaches consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Range Section */}
      <section className="about-section products-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Product Range</h2>
            <p>Carefully handpicked for your daily needs.</p>
          </div>
          <div className="about-grid">
            <div className="card">
              <h3>🥥 Premium Coconuts</h3>
              <p>Grade-A fresh coconuts, nutritious copra, and cold-pressed pure coconut oil for cooking and wellness.</p>
            </div>
            <div className="card">
              <h3>🍃 Natural Superfoods</h3>
              <p>Nutrient-rich, farm-fresh produce sourced daily to keep your family healthy and active.</p>
            </div>
            <div className="card">
              <h3>📦 Sustainable Goods</h3>
              <p>Eco-friendly daily essentials designed to reduce carbon footprint without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;