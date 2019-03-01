import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const container = {
  lineHeight: 0,
}

const checkboxInput = {
  display: 'none',
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
  margin: '2px',
}

const checkedLabel = {
  backgroundColor: '#697EFF',
  opacity: '1',
  border: '2px solid #697EFF',
  ':after': {
    transform: 'rotate(45deg)',
    content: '" "',
    position: 'absolute',
    left: 4,
    top: 0,
    width: '6px',
    height: '11px',
    border: '5px solid #ffffff',
    borderWidth: '0 2px 2px 0',
  },
}

class Checkbox extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { checked } = this.props

    if (checked !== nextProps.checked) {
      return true
    }
    return false
  }

  render() {
    const {
      id, checked, onChange, ...props
    } = this.props;

    return (
      <div className={css(container)}>
        <input
          type="checkbox"
          id={id}
          className={css(checkboxInput)}
          checked={checked}
          onChange={event => (onChange ? onChange(event) : undefined)}
          {...props}
        />
        <label htmlFor={id} className={css(checkboxLabel, checked && checkedLabel)} />
      </div>
    )
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  onChange: () => {},
}

export default Checkbox
