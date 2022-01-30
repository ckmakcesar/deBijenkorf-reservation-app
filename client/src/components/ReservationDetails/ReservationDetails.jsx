import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Button from '../misc/Button';
import Reservation from '../../types/Reservation';
import Store from '../../types/Store';
import Status from '../../types/Status';
import { formatDate } from '../../utils/utils';

import { reservationStatusCodesToColors } from '../../constants';
import styles from '../../styles/ReservationDetails.module.css';

const ReservationDetails = ({
  reservation,
  store,
  status,
  setReservationToDelete,
  setDrawerReservationId,
}) => {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setDrawerReservationId(reservation.id);
  };
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={clsx(styles.reservationDetailsContainer, hover && styles.reservationDetailsHover)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.reservationDetailsLeft}>
        <div className={styles.reservationDetailsName}>
          {reservation.name}
        </div>
        <div className={styles.reservationDetailsContext}>
          {formatDate(reservation.date)}
          &nbsp;·&nbsp;
          {store.name}
        </div>
      </div>

      <div className={styles.reservationDetailsRight}>
        <div className={clsx(styles.reservationDetailsStatus, reservationStatusCodesToColors[status.code])}>
          {status.name}
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation(); // not to trigger "click row for viewing/editing details"
            setReservationToDelete(reservation);
          }}
          text='Delete'
          boxIconClassName='bx-trash'
          tone='red'
        />
      </div>
    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
ReservationDetails.propTypes = {
  reservation: PropTypes.exact(Reservation).isRequired,
  store: PropTypes.exact(Store),
  status: PropTypes.exact(Status),
  setReservationToDelete: PropTypes.func.isRequired,
  setDrawerReservationId: PropTypes.func.isRequired,
};

ReservationDetails.defaultProps = {
  store: {},
  status: {},
};

export default ReservationDetails;
