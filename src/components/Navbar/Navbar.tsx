import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userProfile = JSON.parse(
    localStorage.getItem("userProfile") || "null"
  );

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const isActive = (path: string) => location.pathname === path;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">
            <svg
              width="55"
              height="55"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="#173a1a"
                stroke="#b0912a"
                strokeWidth="1"
              />
              <path
                d="M18 28H46L43 46C42.7 48 41 49.5 39 49.5H25C23 49.5 21.3 48 21 46L18 28Z"
                fill="white"
              />
              <path
                d="M24 28C24 22.5 27.5 18 32 18C36.5 18 40 22.5 40 28"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <line
                x1="26"
                y1="30"
                x2="26"
                y2="47"
                stroke="#1B5E20"
                strokeWidth="1.5"
              />
              <line
                x1="32"
                y1="30"
                x2="32"
                y2="47"
                stroke="#1B5E20"
                strokeWidth="1.5"
              />
              <line
                x1="38"
                y1="30"
                x2="38"
                y2="47"
                stroke="#1B5E20"
                strokeWidth="1.5"
              />
              <path
                d="M37 15C42 15 45 18 45 23C40 23 37 20 37 15Z"
                fill="#6DDC5C"
              />
            </svg>
          </span>

          <div className="logo-text">
            <h2>Greens Basket</h2>
            <p>Reliable Bulk Supply</p>
          </div>
        </Link>

        {/* Center Nav Links + Prominent Order Now Button */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          {["/", "/products", "/categories", "/gallery", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className={isActive(path) ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
            </Link>
          ))}

          {/* Premium Integrated Order / Track Button */}
          <Link
            to={isLoggedIn ? "/my-orders" : "/login"}
            className="btn-order-glow"
            onClick={() => setMenuOpen(false)}
          >
            <span className="glow-icon"></span>
            <span>{isLoggedIn ? "MY ORDERS" : "ORDER NOW"}</span>
          </Link>
        </nav>

        {/* User Account & Relocated Logout Corner */}
        <div className="navbar-actions">
          {isLoggedIn ? (
            <div className="user-profile-wrapper">
              <div className="user-badge">
                <div className="avatar-circle">
                  <span>{userProfile?.name?.charAt(0).toUpperCase() || "U"}</span>
                  <span className="online-indicator"></span>
                </div>
                <div className="user-info">
                  <label>Logged in as</label>
                  <h4>{userProfile?.name || "User"}</h4>
                </div>
              </div>

              {/* Clean Relocated Logout Pill */}
              <button className="btn-logout-luxury" onClick={logout} title="Logout">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-login-gold">
              Login Now
            </Link>
          )}

          {/* Mobile Hamburger Button */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;