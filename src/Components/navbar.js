import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle">
          <img src={logo} alt="Nyatpole Logo" />
        </div>
        <NavLink to="/" className="navbar-name">
          श्री न्यातपोल एडटेक प्रा. लि.
        </NavLink>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/career" onClick={() => setMenuOpen(false)}>
            Career
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
