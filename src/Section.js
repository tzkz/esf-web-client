import React from 'react';
import PropTypes from 'prop-types';

import './Section.css';

const Section = ({ children }) => (
  <div className="container">
    <div className="content">{children}</div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
