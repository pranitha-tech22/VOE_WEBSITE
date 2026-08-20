import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  { number: "01", name: "HOME", href: "#home" },
  { number: "02", name: "ABOUT", href: "#about" },
  { number: "03", name: "GALLERY", href: "#gallery" },
  { number: "04", name: "TEAM", href: "#team" },
  { number: "05", name: "EVENTS", href: "#events" },
];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        {/* Hamburger Button - LEFT */}
        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* VOE Logo */}
        <a href="#home" className="navbar-logo">
          VOE
        </a>

      </nav>


      {/* ================= MENU OVERLAY ================= */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>


      {/* ================= SIDE MENU ================= */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        {/* Menu Header */}
        <div className="menu-header">
          <span>NAVIGATION</span>
          <span className="menu-line"></span>
        </div>


        {/* Navigation Items */}
        <div className="side-menu-content">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >

              <span className="menu-number">
                {item.number}
              </span>

              <span className="menu-name">
                {item.name}
              </span>

              <span className="menu-arrow">
                ↗
              </span>

            </a>
          ))}

        </div>


        {/* Menu Footer */}
        <div className="menu-footer">
          <span>VOICE OF EASWARI</span>
        </div>

      </div>
    </>
  );
}

export default Navbar;