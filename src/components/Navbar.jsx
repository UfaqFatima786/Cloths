import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          Fashion<span>Store</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;