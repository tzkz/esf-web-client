import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const button = {
  width: '100%',
  lineHeight: 2.9,
  textAlign: 'center',
  borderRadius: '5px',
  backgroundColor: '#729246',
  color: '#FFFFFF',
  border: '1px solid #729246',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  letterSpacing: '0.8px',
  transition: '.2s ease-in-out',
  ':hover': {
    backgroundColor: '#617c3c',
  },
};

const Button = ({ children, className, ...other }) => (
  <button
    className={css(button, className)}
    {...other}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
