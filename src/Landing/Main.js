import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { css } from 'emotion';

import SectionContent from '../common/SectionContent';
import FileInput from '../common/FileInput';
import Button from '../common/Button';

const main = {
  background: 'linear-gradient(90deg, #744fc6 12%, #697eff 100%)',
  display: 'flex',
  flex: '1',
  color: '#FFFFFF',
  textAlign: 'center',
}

const headline = {
  fontSize: '30px',
  fontWeight: '600',
  margin: '1em 24px 0',
  '@media (min-width: 768px)': {
    fontSize: '34px',
    lineHeight: '50px',
    margin: '2em 24px 0',
  },
}

const subheadline = {
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.67',
  padding: '16px 24px 0',
  '@media (min-width: 768px)': {
    lineHeight: '2.57',
    padding: '8px 24px 0',
  }
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

export const signInButton = {
  backgroundColor: 'white',
  border: '2px solid white',
  color: '#744fc6',
  ':hover': {
    backgroundColor: 'rgb(255,255,255, .9)',
    border: '2px solid white',
  },
};

const buttons = {
  display: 'flex',
  justifyContent: 'center',
  padding: '16px 16px 0',
  '@media (min-width: 768px)': {
    padding: '2em 16px',
  }
};

const browseButtonContainer = {
  flexBasis: '12em',
  margin: '1.3em .5em',
};

const Main = ({ onDemoClick }) => (
  <section className={css(main)}>
    <SectionContent>
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
          <FileInput className={css(signInButton)}>
            <FormattedMessage
              id="LoginInitial.SignIn"
              defaultMessage="Sign In"
            />
          </FileInput>
        </div>
        <div className={css(browseButtonContainer)}>
          <Button
            className={css(demoButton)}
            onClick={onDemoClick}
          >
            <FormattedMessage
              id="LoginInitial.Demo"
              defaultMessage="Try Demo"
            />
          </Button>
        </div>
      </div>
    </SectionContent>
  </section>
)

Main.propTypes = {
  onDemoClick: PropTypes.func,
}

export default Main
