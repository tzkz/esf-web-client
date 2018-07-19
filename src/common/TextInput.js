import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const input = {
  '::placeholder': {
    color: '#bbbbbb',
  },
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: '0',
  height: '40px',
  minWidth: '0',
};

const TextInput = ({ className, ...other }) => (
  <input type="text" className={css(input, className)} {...other} />
);

TextInput.propTypes = {
  className: PropTypes.string,
};

export default TextInput;
