import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { FormattedMessage } from 'react-intl';

import SectionContent from './SectionContent';
import './Header.css';
import Select from './Select';

const localeOptions = [
  { value: 'en', label: '🇺🇸 Eng' },
  { value: 'kk', label: '🇰🇿 Қаз' },
  { value: 'ru', label: '🇷🇺 Рус' },
];

const container = {
  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
  color: '#0194bf',
}

const Header = ({ localeValue, onLocaleChange, className }) => (
  <header className={css(container, className)}>
    <SectionContent>
      <div className="header-content">
        <div className="title">GetESF</div>
        <div className="nav-bar">
          <div className="nav-item">
            <FormattedMessage
              id="Header.ContactUs"
              defaultMessage="Contact Us"
            />
          </div>
          <div className="nav-item nav-item-lang">
            <Select
              options={localeOptions}
              value={localeValue}
              onChange={onLocaleChange}
            />
          </div>
        </div>
      </div>
    </SectionContent>
  </header>
);

Header.propTypes = {
  localeValue: PropTypes.shape({
    value: PropTypes.string,
  }),
  onLocaleChange: PropTypes.func,
  className: PropTypes.string,
};

export default Header;
