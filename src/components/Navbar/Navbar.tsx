import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="logo">
          <span className="logo-icon">

            <svg
              width="55"
              height="55"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="#173a1a"
                stroke="#b0912a"
                strokeWidth="1.0"
              />

              {/* Basket */}
              <path
                d="M18 28H46L43 46C42.7 48 41 49.5 39 49.5H25C23 49.5 21.3 48 21 46L18 28Z"
                fill="white"
              />

              {/* Handle */}
              <path
                d="M24 28C24 22.5 27.5 18 32 18C36.5 18 40 22.5 40 28"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* Basket Lines */}
              <line x1="26" y1="30" x2="26" y2="47" stroke="#1B5E20" strokeWidth="1.5"/>
              <line x1="32" y1="30" x2="32" y2="47" stroke="#000601" strokeWidth="1.5"/>
              <line x1="38" y1="30" x2="38" y2="47" stroke="#111c11" strokeWidth="1.5"/>

              {/* Leaf */}
              <path
                d="M37 15C42 15 45 18 45 23C40 23 37 20 37 15Z"
                fill="#6DDC5C"
              />

              <path
                d="M37 15C35 18 34 21 34 25"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

          </span>

          <div className="logo-text">
            <h2>Green Basket</h2>
            <p>Reliable Bulk Supply</p>
          </div>
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {[
            "/",
            "/products",
            "/categories",
            "/gallery",
            "/about",
            "/contact",
            
          ].map((path) => (
            <Link
              key={path}
              to={path}
              className={isActive(path) ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="navbar-buttons">
          <button className="order-btn-premium" disabled>
            Order Now
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;