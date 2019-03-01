import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const input = {
  display: 'none',
}

export const label = {
  display: 'block',
  lineHeight: 3.1,
  textAlign: 'center',
  borderRadius: '5px',
  backgroundColor: '#697EFF',
  color: '#FFFFFF',
  border: '1px solid #697EFF',
  cursor: 'pointer',
  fontFamily: 'inherit',
  letterSpacing: '0.8px',
  transition: '.2s ease-in-out',
  ':hover': {
    backgroundColor: '#6073E8',
    borderColor: '#6073E8',
  },
};

const FileInput = ({
  children, className, id, ...other
}) => (
  <label
    htmlFor={id}
    className={css(label, className)}
  >
    {children}
    <input
      type="file"
      name="file-input"
      id={id}
      className={css(input)}
      {...other}
    />
  </label>
);

FileInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

FileInput.defaultProps = {
  children: <span>Browse</span>,
  className: '',
  id: 'file-input',
}

export default FileInput;
