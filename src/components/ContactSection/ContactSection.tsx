import React from "react";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
  const phoneNumber = "9553679915";
  const email = "info@cocofresh.com";

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">We're here to help you anytime.</p>

        <div className="contact-grid">
          {/* Call */}
          <a href={`tel:+91${phoneNumber}`} className="contact-item phone">
            <div className="icon-box"><i className="fas fa-phone-alt"></i></div>
            <h3>Call Us</h3>
            <p>+91 {phoneNumber}</p>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" className="contact-item whatsapp">
            <div className="icon-box"><i className="fab fa-whatsapp"></i></div>
            <h3>WhatsApp</h3>
            <p>Chat with us</p>
          </a>

          {/* Email */}
          <a href={`mailto:${email}`} className="contact-item email">
            <div className="icon-box"><i className="fas fa-envelope"></i></div>
            <h3>Email</h3>
            <p>{email}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;