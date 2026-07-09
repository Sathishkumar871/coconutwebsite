import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact">

      <div className="container">

        <h2>Contact Us</h2>

        <p>Have questions? Reach us anytime.</p>

        <div className="contact-buttons">

          <a href="tel:+919553679915">
            Call Now
          </a>

          <a
            href="https://wa.me/919553679915"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a href="mailto:info@cocofresh.com">
            Email
          </a>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;