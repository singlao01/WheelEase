// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} TwoWheeler. All rights reserved.</p>
      <p>
      <a href="https://github.com/singlao01" target="_blank" rel="noreferrer"></a>
      </p>
    </footer>
  );
}

export default Footer;
