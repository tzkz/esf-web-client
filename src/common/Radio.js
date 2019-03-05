import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const container = {
  display: 'flex',
  flex: '1',
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  height: '40px',
  padding: '3px',
}

const radioInput = {
  display: 'none',
  ':checked + label': {
    backgroundColor: '#697EFF',
    borderRadius: '5px',
    color: ' #ffffff',
  },
}

const radioItem = {
  flex: '1',
  display: 'flex',
}

const radioLabel = {
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#bbbbbb',
  ':hover': {
    cursor: 'pointer',
  },
}

const Radio = ({
  options, name, className, onOptionChange, selectedOption,
}) => (
  <div className={css(container, className)}>
    {options.map(option => (
      <div className={css(radioItem)} key={option.value}>
        <input
          type="radio"
          name={name}
          id={option.value}
          value={option.value}
          onChange={onOptionChange}
          checked={option.value === selectedOption}
          className={css(radioInput)}
        />
        <label htmlFor={option.value} className={css(radioLabel)}>{option.label}</label>
      </div>
    ))}
  </div>
)

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.node,
  })).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onOptionChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
}

Radio.defaultProps = {
  className: '',
  selectedOption: '',
}

export default Radio
