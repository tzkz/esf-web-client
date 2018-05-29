import React from 'react';
import PropTypes from 'prop-types';

import './Section.css';

const Section = ({ children, ...props }) => (
  <div className="content" {...props}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
