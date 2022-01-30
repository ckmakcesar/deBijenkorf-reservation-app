import React from 'react';
import PropTypes from 'prop-types';

import ReservationDetails from '../ReservationDetails';
import Reservation from '../../types/Reservation';
import Store from '../../types/Store';
import Status from '../../types/Status';

import styles from '../../styles/ReservationsList.module.css';

const ReservationsList = ({
  reservationsMap,
  loading,
  storesMap,
  statusesMap,
  setReservationToDelete,
  setDrawerReservationId,
}) => {
  if (loading) {
    return (<div>LOADING DISC</div>); // TODO
  }

  const reservationCount = Object.keys(reservationsMap).length;

  return (
    <>
      {!reservationCount
        ? <div className={styles.emptyState}>There are no reservations</div> // TODO - EMPTY STATE
        : Object.values(reservationsMap).map((reservation) => (
          <div key={reservation.id}>
            <ReservationDetails
              reservation={reservation}
              store={storesMap[reservation.storeId]}
              status={statusesMap[reservation.statusId]}
              setReservationToDelete={setReservationToDelete}
              setDrawerReservationId={setDrawerReservationId}
            />
            <hr id='dotted' />
          </div>
        ))
      }
    </>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
ReservationsList.propTypes = {
  reservationsMap: PropTypes.objectOf(PropTypes.exact(Reservation)).isRequired,
  loading: PropTypes.bool.isRequired,
  storesMap: PropTypes.objectOf(PropTypes.exact(Store)).isRequired,
  statusesMap: PropTypes.objectOf(PropTypes.exact(Status)).isRequired,
  setReservationToDelete: PropTypes.func.isRequired,
  setDrawerReservationId: PropTypes.func.isRequired,
};

export default ReservationsList;
