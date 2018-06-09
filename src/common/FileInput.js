import React from 'react';
import PropTypes from 'prop-types';

import './FileInput.css';

const FileInput = ({ children, ...other }) => (
  <div>
    <label htmlFor="file-input" className="file-input-label">
      {children}
    </label>
    <input
      type="file"
      name="file-input"
      id="file-input"
      className="file-input"
      {...other}
    />
  </div>
);

FileInput.propTypes = {
  children: PropTypes.node,
};

export default FileInput;
