import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { FormattedMessage } from 'react-intl';

import SectionContent from './SectionContent';
import './Header.css';
import LangSelect from './LangSelect';

const container = {
  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
  color: '#0194bf',
}

const headerContent = {
  display: 'flex',
  alignItems: 'center',
  height: '74px',
  '@media (min-width: 768px)': {
    justifyContent: 'space-between',
    height: '6.25em',
  }
};

const leftContainer = {
  flex: '1',
  '@media (min-width: 768px)': {
    display: 'none',
  }
}

const rightContainer = {
  flex: '1',
}

const burgerButton = {
  padding: '10px 16px 10px 24px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fill: '#FFF',
};

const burger = (
  <svg viewBox='0 0 24 24' width='24' height='24'>
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </svg>
);

const Header = ({ localeValue, onLocaleChange, className, burgerClassName }) => (
  <header className={css(container, className)}>
    <SectionContent>
      <div className={css(headerContent)}>
        <div className={css(leftContainer)}>
          <button className={css(burgerButton, burgerClassName)}>
            {burger}
          </button>
        </div>
        <div className="title">GetESF</div>
        <div className={css(rightContainer)}>
          <div className="nav-bar">
            <div className="nav-item">
              <FormattedMessage
                id="Header.ContactUs"
                defaultMessage="Contact Us"
              />
            </div>
            <div className="nav-item nav-item-lang">
              <LangSelect
                value={localeValue}
                onChange={onLocaleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContent>
  </header>
);

Header.propTypes = {
  localeValue: PropTypes.string,
  onLocaleChange: PropTypes.func,
  className: PropTypes.string,
};

export default Header;
