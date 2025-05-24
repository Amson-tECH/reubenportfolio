import React from 'react';
import LocationMap from '../LocationMap/LocationMap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2025 Reuben Korsi Amuzu. All rights reserved.
        </p>
        <p className="footer-location">Location: Accra, Ghana</p>
      </div>

      <LocationMap />

      <div className="footer-socials">
        <p className="footer-thanks">Thank you for visiting my portfolio!</p>
      </div>
    </footer>
  );
};

export default Footer;








