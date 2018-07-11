import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const label = {
  display: 'block',
  lineHeight: 3.1,
  textAlign: 'center',
  borderRadius: '5px',
  backgroundColor: '#729246',
  color: '#FFFFFF',
  border: '1px solid #729246',
  cursor: 'pointer',
  fontFamily: 'inherit',
  letterSpacing: '0.8px',
  transition: '.2s ease-in-out',
  ':hover': {
    backgroundColor: '#617c3c',
    borderColor: '#617c3c',
  },
};

const FileInput = ({ children, className, ...other }) => (
  <div>
    <label
      htmlFor="file-input"
      className={css(
        label,
        className,
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
  className: PropTypes.string,
};

export default FileInput;
