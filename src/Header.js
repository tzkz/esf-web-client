import React from 'react';
import SectionContent from './SectionContent';
import './Header.css';

const Header = () => (
  <header className="header">
    <SectionContent>
      <div className="header-content">
        <div className="title">ESF Exporter</div>
        <div className="nav-bar">
          <div className="nav-item">Contact Us</div>
          <div className="nav-item">
            <select name="select" className="language-select">
              <option value="value1">Russian</option> 
              <option value="value2">English</option>
              <option value="value3">Kazakh</option>
            </select>
          </div>
        </div>
      </div>
    </SectionContent>
  </header>
);

export default Header;
