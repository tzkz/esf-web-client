import React from 'react';
import './Section.css';

const Section = ({ children }) => (
  <div className="container">
    <div className="content">{children}</div>
  </div>
);

export default Section;
