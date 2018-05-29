import React from 'react';

import './Footer.css';
import SectionContent from './SectionContent';

const Footer = () => (
  <footer className="footer">
    <SectionContent>
      <div className="footer-inner">
        <div className="footer-items">Terms of Service</div>
        <div className="footer-items">Contact Us</div>
      </div>
    </SectionContent>
  </footer>
);

export default Footer;
