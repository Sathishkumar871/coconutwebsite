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
          <span className="logo-icon">🥥</span>
          <div className="logo-text">
            <h2>CocoFresh</h2>
            <p>EXPORT QUALITY</p>
          </div>
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {["/", "/products", "/categories", "/gallery", "/about", "/contact"].map((path) => (
            <Link key={path} to={path} className={isActive(path) ? "active-link" : ""} onClick={() => setMenuOpen(false)}>
              {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="navbar-buttons">
          <button className="order-btn-premium" disabled>Order Now</button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;