import React from 'react';
import { FormattedMessage } from 'react-intl';

import './LoginInitial.css';

import FileInput from '../common/FileInput';

const LoginInitial = () => (
  <div className="login-form">
    <div className="browse-button">
      <FileInput>
        <FormattedMessage
          id="LoginInitial.BrowseCertificate"
          defaultMessage="Browse Certificate"
        />
      </FileInput>
    </div>
  </div>
);

export default LoginInitial;
