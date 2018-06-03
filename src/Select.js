import React from 'react';
import ReactSelect from 'react-select';

const styles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'transparent',
    border: '0',
    boxShadow: 'none',
    minHeight: 'initial',
    cursor: 'pointer',
    minWidth: '6em',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 8px',
    color: 'inherit',
  }),
  singleValue: (base) => ({
    color: 'inherit',
  }),
  option: (base) => ({
    ...base,
    cursor: 'pointer',
  }),
};
const components = {
  IndicatorSeparator: () => '',
  DropdownIndicator: () => (
    <span
      style={{
        width: 0, 
        height: 0, 
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        
        borderTop: '5px solid #0194bf',
      }}
    />
  ),
};

const Select = ({ ...props }) => (
  <ReactSelect
    isClearable={false}
    isSearchable={false}
    styles={styles}
    components={components}
    {...props}
  />
);

export default Select;
