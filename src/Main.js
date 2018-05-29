import React from 'react';

import './Main.css';
import SectionContent from './SectionContent';

const Main = () => (
  <section className="main">
    <SectionContent>
      <div className="main-inner">
        <div className="description">
          <div className="description-title">Export invoices to PDF with ease. One invoice or in bulk</div>
          <div className="description-body">Get what the official app is missing absolutely FREE</div>
        </div>
        <div className="login-form">
          <div className="first-line">Start by browsing your authentifiation certificate</div>
          <div className="browse-button">
            <label htmlFor="upload-photo">Browse Certificate</label>
            <input type="file" name="photo" id="upload-photo" />
          </div>
          <div className="select-env" id="env"></div>
          <div><a href="http://kgd.gov.kz/sites/default/files/ESF/testovye_ecp_dekabr_2017.zip" className="test-text"> Download test certificates</a></div>
        </div>
      </div>
    </SectionContent>
  </section>
);

export default Main;
