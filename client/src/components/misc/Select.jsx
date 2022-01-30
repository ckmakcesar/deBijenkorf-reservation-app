import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  options,
  onChange,
  label,
  name,
  value,
  prependBlankOption,
  required,
  disabled,
}) => (
  <label className='input-field-label'>
    <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>

    <select
      name={name}
      value={value}
      onChange={e => { onChange(e.target.value) }}
      required={required}
      disabled={disabled}
    >
      {prependBlankOption ? <option key=''></option> : <></>}
      {options.map((option, index) => (
        <option key={index}>{option.name}</option>
      ))}
    </select>
  </label>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  prependBlankOption: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  label: '',
  name: '',
  value: '',
  prependBlankOption: false,
  required: false,
  disabled: false,
};

export default Select;
