import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import InputField from '../misc/InputField';
import Select from '../misc/Select';
import RadioButtons from '../misc/RadioButtons';
import DatePicker from '../misc/DatePicker';
import Reservation from '../../types/Reservation';
import Store from '../../types/Store';
import Status from '../../types/Status';
import { isFromTodayOn, cleanObject, formatDate } from '../../utils/utils';

import styles from '../../styles/UpsertReservationForm.module.css';

// Create a new reservation, or Update an existing reservation
const UpsertReservationForm = ({
  storesMap,
  statusesMap,
  formId,
  onSubmit,
  onClose,
  // below prop is for UPDATING an existing entry; if not supplied, the user is creating an entry
  reservation: existingReservation,
}) => {
  const [name, setName] = useState(existingReservation?.name || '');
  const [storeName, setStoreName] = useState(storesMap[existingReservation?.storeId]?.name || '');
  const [statusName, setStatusName] = useState(statusesMap[existingReservation?.statusId]?.name || '');
  const [date, setDate] = useState(existingReservation?.date ? new Date(existingReservation.date) : null);

  const ref = useRef(null);

  const storeOptions = Object.values(storesMap);
  const statusNames = Object.values(statusesMap).map((status) => status.name);

  const resetStates = () => {
    setName('');
    setStoreName('');
    setStatusName('');
    setDate(null);
    ref.current = null;
  };

  const handleSubmit = (e) => {
    if (!date) {
      ref.current.setOpen(true);
    } else if (name && storeName && statusName) {
      const selectedStore = Object.values(storesMap).find((store) => store.name === storeName);
      const selectedStatus = Object.values(statusesMap).find((status) => status.name === statusName);
      if (selectedStore && selectedStatus) {
        const reservationToUpsert = {
          id: existingReservation?.id, // present only when updating an existing reservation
          name,
          storeId: selectedStore?.id,
          statusId: selectedStatus?.id,
          date: formatDate(date),
        };

        // if it is in UPDATE mode but no change is made, no action should be dispatched
        let allKeysUnchanged;
        if (existingReservation
          && existingReservation.name == name
          && existingReservation.storeId === selectedStore?.id
          && existingReservation.statusId === selectedStatus?.id
          && formatDate(existingReservation.date) === formatDate(date)
        ) {
          allKeysUnchanged = true;
        }

        if (!allKeysUnchanged) {
          resetStates();
          onSubmit(cleanObject(reservationToUpsert)); // wipe out undefined / empty props
          e.preventDefault();
        } else {
          resetStates();
          onClose();
        }
      }
    } else {
      throw new Error('Store/Status not exist - please refresh page and retry.');
    }
  };

  return (
    <form
      id={formId}
      className={styles.upsertReservationModalForm}
      onSubmit={handleSubmit}
    >
      <InputField
        label='Name'
        name='name'
        value={name}
        onChange={setName}
        required
        id='name'
      />

      <Select
        options={storeOptions}
        onChange={setStoreName}
        label='Store'
        name='status'
        value={storeName}
        prependBlankOption
        required
        id='store'
      />

      <RadioButtons
        values={statusNames}
        onChange={setStatusName}
        label='Status'
        name='status'
        value={statusName}
        prependBlankOption
        required
        id='status'
      />

      <DatePicker
        ref={ref}
        label='Date'
        required
        dateFormat="yyyy-MM-dd"
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        filterDate={isFromTodayOn}
        divId='date'
      />
    </form>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
UpsertReservationForm.propTypes = {
  storesMap: PropTypes.objectOf(PropTypes.exact(Store)).isRequired,
  statusesMap: PropTypes.objectOf(PropTypes.exact(Status)).isRequired,
  formId: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  reservation: PropTypes.exact(Reservation),
};

export default UpsertReservationForm;
