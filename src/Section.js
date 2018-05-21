import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Section.css';

const Section = ({ children, className }) => (
  <div className={classnames('container', className)}>
    <div className="content">{children}</div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
