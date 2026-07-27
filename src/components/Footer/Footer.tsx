import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Green Basket</h2>
        </div>


        {/* Admin Login */}
        <div className="footer-admin">

          <Link to="/greenbasket-admin">
            Admin portal
          </Link>

        </div>


        {/* Copyright */}
        <div className="footer-bottom">

          <p>
            © 2026 Green Basket. All Rights Reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}

export default Footer;