import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'

const components = {
  IndicatorSeparator: () => '',
  DropdownIndicator: () => (
    <span
      style={{
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '5px solid white',
      }}
    />
  ),
}

const Select = ({ controlStyles, ...props }) => {
  const styles = {
    control: base => ({
      ...base,
      backgroundColor: 'transparent',
      border: '0',
      boxShadow: 'none',
      minHeight: 'initial',
      cursor: 'pointer',
      ...controlStyles,
    }),
    valueContainer: base => ({
      ...base,
      padding: '0 8px',
    }),
    singleValue: base => ({
      ...base,
      color: 'inherit',
    }),
    option: (base, state) => ({
      ...base,
      cursor: 'pointer',
      color: state.isSelected ? 'white' : '#697EFF',
    }),
  }

  return (
    <ReactSelect
      isClearable={false}
      isSearchable={false}
      styles={styles}
      components={components}
      {...props}
    />
  )
}

Select.propTypes = {
  controlStyles: PropTypes.shape({
    color: PropTypes.string,
    height: PropTypes.string,
  }),
}

Select.defaultProps = {
  controlStyles: {},
}

export default Select
