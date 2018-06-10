import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const label = {
  display: 'block',
  lineHeight: 3.1,
  textAlign: 'center',
  borderRadius: '5px',
  backgroundColor: '#729246',
  color: '#e9e3e3',
  border: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  letterSpacing: '0.8px',
  ':hover': {
    backgroundColor: '#617c3c',
  },
};

const FileInput = ({ children, labelClassName, ...other }) => (
  <div>
    <label
      htmlFor="file-input"
      className={css(
        label,
        labelClassName,
      )}
    >
      {children}
    </label>
    <input
      type="file"
      name="file-input"
      id="file-input"
      className={css({ display: 'none' })}
      {...other}
    />
  </div>
);

FileInput.propTypes = {
  children: PropTypes.node,
  labelClassName: PropTypes.string,
};

export default FileInput;
