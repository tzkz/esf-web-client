import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const input = {
  display: 'none',
  ':hover + label': {
    backgroundColor: '#617c3c',
    borderColor: '#617c3c',
  },
}

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
};

const FileInput = ({
  children, className, labelClassName, ...other
}) => (
  <div>
    <input
      type="file"
      name="file-input"
      id="file-input"
      className={css(input, className)}
      {...other}
    />
    <label
      htmlFor="file-input"
      className={css(label, labelClassName)}
    >
      {children}
    </label>
  </div>
);

FileInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
};

FileInput.defaultProps = {
  children: <span>Browse</span>,
  className: '',
  labelClassName: '',
}

export default FileInput;
