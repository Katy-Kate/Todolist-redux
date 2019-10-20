import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo right">
          Logo
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
