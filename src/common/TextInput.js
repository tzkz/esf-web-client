import React from 'react';
import { css } from 'emotion';

const input = {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  border: '0',
  height: '40px',
  minWidth: '0',
};

const TextInput = ({ ...other }) => (
  <input type="text" {...other} className={css(input)} />
);

export default TextInput;
