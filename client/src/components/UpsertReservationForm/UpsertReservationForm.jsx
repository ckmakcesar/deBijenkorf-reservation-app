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

const UpsertReservationForm = ({
  storesMap,
  statusesMap,
  formId,
  onSubmit,
  // below prop is for editing an existing entry; if not supplied, the user is creating an entry
  reservation: existingReservation,
}) => {
  const [name, setName] = useState(existingReservation?.name || '');
  const [storeName, setStoreName] = useState(storesMap[existingReservation?.storeId]?.name || '');
  const [statusName, setStatusName] = useState(statusesMap[existingReservation?.statusId]?.name || '');
  const [date, setDate] = useState(existingReservation?.date ? new Date(existingReservation.date) : null);

  const ref = useRef(null);

  const storeOptions = Object.values(storesMap);
  const statusNames = Object.values(statusesMap).map((status) => status.name);

  const handleSubmit = (e) => {
    e.preventDefault();

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
        onSubmit(cleanObject(reservationToUpsert)); // wipe out undefined / empty props
        e.preventDefault();
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
      />

      <Select
        options={storeOptions}
        onChange={setStoreName}
        label='Store'
        name='status'
        value={storeName}
        prependBlankOption
        required
      />

      <RadioButtons
        values={statusNames}
        onChange={setStatusName}
        label='Status'
        name='status'
        value={statusName}
        prependBlankOption
        required
      />

      <DatePicker
        ref={ref}
        label='Date'
        required
        dateFormat="yyyy-MM-dd"
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        filterDate={isFromTodayOn}
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
  reservation: PropTypes.exact(Reservation),
};

export default UpsertReservationForm;
