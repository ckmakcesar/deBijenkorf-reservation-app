import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  name,
  value,
  type,
  min,
  max,
  onChange,
  required,
  disabled,
}) => {
  const optionalProps = {};
  if (name) {
    optionalProps.name = name;
  }
  if (type) {
    optionalProps.type = type;
    if (type === 'number' && !isNaN(min)) {
      optionalProps.min = min;
    }
    if (type === 'number' && !isNaN(max)) {
      optionalProps.max = max;
    }
  }

  return (
    <label className='input-field-label'>
      <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>

      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        {...optionalProps}
      />
    </label>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  label: '',
  name: '',
  value: '',
  type: '',
  min: NaN,
  max: NaN,
  required: false,
  disabled: false,
};

export default InputField;
