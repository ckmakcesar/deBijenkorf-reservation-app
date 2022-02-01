import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/RadioButtons.module.css';

const RadioButtons = ({
  label,
  values,
  onChange,
  name,
  value: selectedValue,
  required,
  disabled,
  id,
}) => (
  <div className='input-field-label'>
    <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>

    {values.map((val, index) => (
      <div
        key={index}
        className={clsx(styles.radioButtonWithLabel, index > 0 && styles.paddingTop)}
      >
        <input
          {...(id ? { id: `Radio-button-${id}-${val}` } : null)} // optional id - should be unique
          type='radio'
          value={val}
          name={name}
          checked={selectedValue === val}
          onChange={e => { onChange(e.target.value); }}
          required={required}
          disabled={disabled}
        />
        <label
          htmlFor={val}
          onClick={() => { onChange(val); }}
        >
          {val}
        </label>
      </div>
    ))}
  </div>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
RadioButtons.propTypes = {
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

RadioButtons.defaultProps = {
  label: '',
  name: '',
  value: '',
  required: false,
  disabled: false,
  id: '',
};

export default RadioButtons;
