import React from 'react';
import PropTypes from 'prop-types';
import SectionContent from './SectionContent';
import './Header.css';
import Select from './Select';

const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'kz', label: 'Kazakh' },
  { value: 'ru', label: 'Russian' },
];

const Header = ({ localeValue, onLocaleChange }) => (
  <header className="header">
    <SectionContent>
      <div className="header-content">
        <div className="title">ESF Exporter</div>
        <div className="nav-bar">
          <div className="nav-item">Contact Us</div>
          <div className="nav-item">
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
};

export default Header;
