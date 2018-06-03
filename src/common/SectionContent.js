import React from 'react';
import PropTypes from 'prop-types';

import './SectionContent.css';

const SectionContent = ({ children, ...props }) => (
  <div className="content" {...props}>{children}</div>
);

SectionContent.propTypes = {
  children: PropTypes.node,
};

export default SectionContent;
