import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'emotion';

const container = {
  maxWidth: '960px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 768px)': {
    padding: '0 1em',
  },
}

const SectionContent = ({ children, className, ...props }) => (
  <div className={css(container, className)} {...props}>{children}</div>
);

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SectionContent.defaultProps = {
  className: '',
}

export default SectionContent;
