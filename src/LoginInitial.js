import React from 'react';

import './LoginInitial.css';

const LoginInitial = () => (
  <div className="login-form">
    <div className="login-description">Start by browsing your authentication certificate</div>
    <div className="browse-button">
      <label htmlFor="upload-photo" className="file-input-label">
        Browse Certificate
      </label>
      <input type="file" name="upload-photo" id="upload-photo" className="file-input" />
    </div>
    <div className="certificate-link-container">
      <a
        href="http://kgd.gov.kz/sites/default/files/ESF/testovye_ecp_dekabr_2017.zip"
        className="certificate-link"
      >
        Download test certificates
      </a>
    </div>
  </div>
);

export default LoginInitial;
