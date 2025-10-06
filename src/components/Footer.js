import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Sahan Nimantha. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="mailto:sahannimantha2233@gmail.com">Email</a>
          <a
            href="https://github.com/SahanNimantha99"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/Sahan-Nimantha"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
