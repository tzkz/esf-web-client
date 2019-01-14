import React from  'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const container ={
  lineHeight: 0,
}

const checkboxInput = {
  display: 'none',
  ':checked+label': {
    backgroundColor: '#327dd0',
    opacity: '1',
    border: '2px solid #327dd0',
  },
  ':checked+label:after': {
    transform: 'rotate(45deg)',
    content: '" "',
    position: 'absolute',
    left: '4',
    top: '0',
    width: '6px',
    height: '11px',
    border: '5px solid #ffffff',
    borderWidth: '0 2px 2px 0',
  }
}

const checkboxLabel = {
  display: 'inline-block',
  cursor: 'pointer',
  height: '18px',
  width: '18px',
  position: 'relative',
  opacity: '0.54',
  border: '2px solid #010101',
  borderRadius: '2px',
}

const Checkbox = ({ id, ...props }) => (
  <div className={css(container)}>
    <input
      type="checkbox"
      id={id}
      className={css(checkboxInput)}
      {...props}
    />
    <label htmlFor={id} className={css(checkboxLabel)}></label>
  </div>
)

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Checkbox
