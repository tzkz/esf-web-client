import React from 'react';
import { FormattedMessage } from 'react-intl';
import { css } from 'emotion';

import './LoginInitial.css';

import FileInput from '../common/FileInput';
import Button from '../common/Button';

const demoButton = {
  backgroundColor: 'transparent',
  border: '2px solid white',
  color: 'white',
  ':hover': {
    backgroundColor: 'transparent',
  },
};

const LoginInitial = () => (
  <div className="login-form">
    <div className="browse-button-container">
      <FileInput>
        <FormattedMessage
          id="LoginInitial.BrowseCertificate"
          defaultMessage="Browse Certificate"
        />
      </FileInput>
    </div>
    <div className="browse-button-container">
      <Button
        className={css(demoButton)}
      >
        <FormattedMessage
          id="LoginInitial.Demo"
          defaultMessage="Try Demo"
        />
      </Button>
    </div>
  </div>
);

export default LoginInitial;
