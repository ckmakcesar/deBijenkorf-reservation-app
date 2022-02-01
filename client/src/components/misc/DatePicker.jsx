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
  divId,
}, ref) => (
  <label className='input-field-label'>
    <div>{label ? `${label}${label && required ? '*' : ''}` : undefined}</div>

    <div
      {...(divId ? { id: `DatePickerDiv-${divId}` } : null)} // optional id - should be unique
      className='customDatePickerWidth'
    >
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
  divId: PropTypes.string,
};

DatePicker.defaultProps = {
  required: false,
  dateFormat: 'dd/MM/yyyy',
  selected: null,
  filterDate: () => { },
  divId: '',
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
