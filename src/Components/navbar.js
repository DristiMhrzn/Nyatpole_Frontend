import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
        <div className="logo-circle">
          <img src={logo} alt="Nyatpole Logo" />
        </div>
        <span>NYAT-POLE</span>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/contactS">Contacts</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
