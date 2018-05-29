import React from 'react';
import Section from './Section';
import './Header.css';

const Header = () => (
  <header>
    <Section>
      <div className="header">
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
    </Section>
  </header>
);

export default Header;
