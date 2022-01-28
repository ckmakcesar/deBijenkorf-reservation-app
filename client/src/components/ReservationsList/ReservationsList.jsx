import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ReservationItem from '../ReservationItem';
import Reservation from '../../types/Reservation';
import styles from '../../styles/ReservationsList.module.css';

const ReservationsList = ({
  reservationsMap,
  loading,
}) => {
  if (loading) {
    return (<div>LOADING DISC</div>); // TODO
  }

  const reservationCount = Object.keys(reservationsMap).length;

  return (
    <div className={styles.root}>
      <h3>List of Reservations:</h3>

      {!reservationCount
        ? <div className={styles.emptyState}>There are no reservations</div> // TODO - EMPTY STATE
        : Object.values(reservationsMap).map((reservation) => (
          <div key={reservation.id}>
            <ReservationItem
              reservation={reservation}
            />
            <hr />
          </div>
        ))
      }
    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
ReservationsList.propTypes = {
  reservationsMap: PropTypes.objectOf(PropTypes.exact(Reservation)).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ReservationsList;
