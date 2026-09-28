import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Fashion<span>Store</span></h2>
          <p>
            Discover stylish and comfortable fashion
            collections for men and women.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/men">Men's Collection</Link>
          <Link to="/women">Women's Collection</Link>
        </div>

        <div className="footer-section">
          <h3>Collections</h3>
          <p>Men's Fashion</p>
          <p>Women's Fashion</p>
          <p>Latest Styles</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FashionStore. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;