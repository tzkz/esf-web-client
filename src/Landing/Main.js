import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { css } from 'emotion';

import './Main.css';
import SectionContent from '../common/SectionContent';
import FileInput from '../common/FileInput';
import Button from '../common/Button';

const main = {
  background: 'linear-gradient(90deg, #744fc6 12%, #697eff 100%)',
  display: 'flex',
  flex: '1',
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

const loginform = {
  display: 'flex',
  justifyContent: 'center',
  padding: '0 16px',
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
      <div className="description">
        <div className="description-title">
          <FormattedMessage
            id="Main.Headline"
            defaultMessage="Export ESF invoices with ease"
          />
        </div>
        <div className="description-body">
          <FormattedMessage
            id="Main.Subheadline"
            defaultMessage="Get what the official app is missing absolutely FREE"
          />
        </div>
      </div>
      <div className={css(loginform)}>
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
