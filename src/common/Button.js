import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const button = {
  display: 'block',
  lineHeight: 3.1,
  textAlign: 'center',
  borderRadius: '5px',
  backgroundColor: '#729246',
  color: '#FFFFFF',
  border: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  letterSpacing: '0.8px',
  ':hover': {
    backgroundColor: '#617c3c',
  },
};

const Button = ({ children, className }) => (
  <button className={css(button, className)}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
