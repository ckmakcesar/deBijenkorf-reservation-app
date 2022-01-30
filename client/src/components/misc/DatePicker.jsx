import React, { forwardRef } from 'react';
import StandardDatePicker from "react-datepicker";
import PropTypes from 'prop-types';

import "react-datepicker/dist/react-datepicker.css";
import '../../styles/misc/DatePicker.css'; // override default stylesheet

const DatePicker = forwardRef(({
  label,
  required,
  dateFormat,
  selected,
  onChange,
  filterDate,
}, ref) => (
  <label className='input-field-label'>
    <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>
    
    <div className='customDatePickerWidth'>
      <StandardDatePicker
        ref={ref}
        dateFormat={dateFormat}
        selected={selected}
        onChange={onChange}
        filterDate={filterDate}
      />
    </div>
  </label>
));

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  dateFormat: PropTypes.string,
  selected: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  filterDate: PropTypes.func,
};

DatePicker.defaultProps = {
  required: false,
  dateFormat: 'dd/MM/yyyy',
  selected: null,
  filterDate: () => { },
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
