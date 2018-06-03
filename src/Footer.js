import React from 'react';
import { FormattedMessage } from 'react-intl';

import SectionContent from './SectionContent';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <SectionContent>
      <div className="footer-inner">
        <div className="footer-items">
          <FormattedMessage
            id="Footer.TermsOfService"
            defaultMessage="Terms of Service"
          />
        </div>
        <div className="footer-items">
          <FormattedMessage
            id="Footer.ContactUs"
            defaultMessage="Contact Us"
          />
        </div>
      </div>
    </SectionContent>
  </footer>
);

export default Footer;
