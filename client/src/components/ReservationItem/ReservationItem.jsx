import React from 'react';
import PropTypes from 'prop-types';

import Reservation from '../../types/Reservation';
import styles from '../../styles/ReservationItem.module.css';

const ReservationItem = ({
  reservation,
}) => {

  return (
    <div className={styles.root}>
      <div>{reservation.id}</div>
      <div>{reservation.name}</div>
      <div>{reservation.storeId}</div>
      <div>{reservation.statusId}</div>
      <div>{reservation.time}</div>
      <div>{reservation.createdAt}</div>
    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
ReservationItem.propTypes = {
  reservation: PropTypes.exact(Reservation).isRequired,
};

export default ReservationItem;
