import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { css } from 'emotion';

import FileInput from '../common/FileInput';
import Button from '../common/Button';
import Spinner from '../common/Spinner';

const main = {
  background: 'linear-gradient(90deg, #744fc6 12%, #697eff 100%)',
  flex: '1',
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '5vh 0',
  '@media (min-width: 768px)': {
    padding: '10vh 0',
  },
}

const headline = {
  fontSize: '2em',
  fontWeight: '600',
  padding: '0.5em 0.5em 0',
}

const subheadline = {
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.67',
  padding: '0.9em 1.2em 0',
}

const demoButton = {
  backgroundColor: 'transparent',
  border: '2px solid white',
  color: 'white',
  ':hover': {
    backgroundColor: 'rgb(255,255,255, .1)',
    border: '2px solid white',
  },
}

const signInLabel = {
  backgroundColor: 'white',
  border: '2px solid white',
  color: '#744fc6',
  ':hover': {
    backgroundColor: 'rgba(255,255,255, .9)',
    border: '2px solid rgba(255,255,255, .9)',
  },
};

const fileInputLabel = {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'initial',
  height: '49px',
  justifyContent: 'center',
}

const fileInputSubtext = {
  fontSize: '9px',
}

const buttons = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em 1em 0',
};

const browseButtonContainer = {
  flexBasis: '12em',
  margin: '1.3em .5em',
};

const Main = ({ onDemoClick, onFileChange, isFileLoading }) => (
  <section className={css(main)}>
    <div className={css(headline)}>
      <FormattedMessage
        id="Main.Headline"
        defaultMessage="Export ESF invoices with ease"
      />
    </div>
    <div className={css(subheadline)}>
      <FormattedMessage
        id="Main.Subheadline"
        defaultMessage="Get what the official app is missing absolutely FREE"
      />
    </div>
    <div className={css(buttons)}>
      <div className={css(browseButtonContainer)}>
        <FileInput
          id="certificate-input"
          className={css(signInLabel)}
          accept=".p12"
          onChange={onFileChange}
        >
          {isFileLoading
            ? <Spinner size={12} color="#744fc6" />
            : (
              <div className={css(fileInputLabel)}>
                <FormattedMessage
                  id="Main.SignIn"
                  defaultMessage="Sign In"
                />
                <div className={css(fileInputSubtext)}>
                  <FormattedMessage
                    id="Main.SignInSubtext"
                    defaultMessage="with your key"
                  />
                </div>
              </div>
            )
          }
        </FileInput>
      </div>
      <div className={css(browseButtonContainer)}>
        <Button
          className={css(demoButton)}
          onClick={onDemoClick}
        >
          <FormattedMessage
            id="Main.Demo"
            defaultMessage="Try Demo"
          />
        </Button>
      </div>
    </div>
  </section>
)

Main.propTypes = {
  onDemoClick: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
  isFileLoading: PropTypes.bool.isRequired,
}

export default Main
