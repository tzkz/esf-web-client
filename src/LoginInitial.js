import React from 'react';

import './LoginInitial.css';

const LoginInitial = () => (
  <div className="login-form">
    <div className="first-line">Start by browsing your authentication certificate</div>
    <div className="browse-button">
      <label htmlFor="upload-photo">Browse Certificate</label>
      <input type="file" name="photo" id="upload-photo" />
    </div>
    <div className="select-env" id="env"></div>
    <a
      href="http://kgd.gov.kz/sites/default/files/ESF/testovye_ecp_dekabr_2017.zip"
      className="test-text"
    >
      Download test certificates
    </a>
  </div>
);

export default LoginInitial;
