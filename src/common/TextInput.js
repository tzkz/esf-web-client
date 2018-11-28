import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const input = {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: '0',
  height: '40px',
  minWidth: '0',
};

const errorInput = {
  borderColor: 'red',
}

const errorContainer = {
  color: 'red',
  fontSize: 12,
  padding: '0 12px',
}

const TextInput = ({ className, errorMessage, ...other }) => (
  <div>
    <input
      type="text"
      size={10}
      className={css(input, className, errorMessage && errorInput)}
      {...other}
    />
    {errorMessage &&
      <div className={css(errorContainer)}>{errorMessage}</div>
    }
  </div>
);

TextInput.propTypes = {
  className: PropTypes.string,
  errorText: PropTypes.string,
};

export default TextInput;
