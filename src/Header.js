import React from 'react';
import SectionContent from './SectionContent';
import './Header.css';
import Select from './Select';

const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
  { value: 'kz', label: 'Kazakh' }
]

const Header = () => (
  <header className="header">
    <SectionContent>
      <div className="header-content">
        <div className="title">ESF Exporter</div>
        <div className="nav-bar">
          <div className="nav-item">Contact Us</div>
          <div className="nav-item">
            <Select options={localeOptions} />
          </div>
        </div>
      </div>
    </SectionContent>
  </header>
);

export default Header;
