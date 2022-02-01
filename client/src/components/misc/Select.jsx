import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/Select.module.css';

const Select = ({
  label,
  options,
  onChange,
  name,
  value,
  prependBlankOption,
  required,
  disabled,
  id,
}) => (
  <label className='input-field-label'>
    <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>

    <select
      {...(id ? { id: `Select-${id}` } : null)} // optional id - should be unique
      className={styles.select}
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
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  prependBlankOption: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  name: '',
  value: '',
  prependBlankOption: false,
  required: false,
  disabled: false,
  id: '',
};

export default Select;
