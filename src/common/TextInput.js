import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const container = {
  display: 'flex',
  flexDirection: 'column-reverse',
  paddingBottom: '16px',
}

const input = {
  fontFamily: 'inherit',
  fontSize: '16px',
  padding: '10px 16px',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  height: '50px',
  width: '100%',
  outline: 'none',
  color: 'rgb(0,0,0,.87)',
}

const labelStyle = {
  fontFamily: 'inherit',
  fontSize: '12px',
  color: 'rgb(0,0,0,.5)',
  padding: '0 0 4px 16px',
}

const labelError = {
  color: '#B00020',
}

const helperStyle = {
  fontFamily: 'inherit',
  fontSize: '12px',
  color: 'rgb(0,0,0,.5)',
  padding: '2px 16px 0',
}

const errorContainer = {
  color: '#B00020',
  fontSize: 12,
  padding: '2px 12px 0',
}

const TextInput = ({ className, errorMessage, label, helperText, ...other }) => (
  <div className={css(container)}>
    {errorMessage &&
      <div className={css(errorContainer)}>{errorMessage}</div>
    }
    {!errorMessage && helperText &&
      <div className={css(helperStyle)}>{helperText}</div>
    }
    <input
      type="text"
      size={10}
      className={css({
        ...input,
        border: errorMessage ? '2px solid #B00020' : 'solid 1px rgb(0,0,0,.5)',
        ':focus': {
          border: errorMessage ? '2px solid #B00020' : '2px solid #697eff',
        },
        ':focus ~ label': {
          color: errorMessage ? '#B00020' : '#697eff',
        },
      }, className)}
      {...other}
    />
    <label className={css(labelStyle, errorMessage && labelError)}>{label}</label>
  </div>
);

TextInput.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
};

export default TextInput
