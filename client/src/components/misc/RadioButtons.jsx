import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/RadioButtons.module.css';

const RadioButtons = ({
  values,
  onChange,
  label,
  name,
  value: selectedValue,
  required,
  disabled,
}) => (
  <div className='input-field-label'>
    <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>

    {values.map((val, index) => (
      <div
        key={index}
        className={clsx(styles.radioButtonWithLabel, index > 0 && styles.paddingTop)}
      >
        <input
          type='radio'
          value={val}
          name={name}
          checked={selectedValue === val}
          onChange={e => { onChange(e.target.value); }}
          id={val}
          disabled={disabled}
        />
        <label htmlFor={val}>{val}</label>
      </div>
    ))}
  </div>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
RadioButtons.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

RadioButtons.defaultProps = {
  label: '',
  name: '',
  value: '',
  required: false,
  disabled: false,
};

export default RadioButtons;
