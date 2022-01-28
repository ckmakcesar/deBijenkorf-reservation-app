import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import ReservationsList from '../containers/ReservationsList';

const ReservationsPage = ({
  onMount,
}) => {
  useEffect(() => {
    onMount()
  }, []);

  return (
    <div className='root'>
      <Header
        text='Reservations'
      />

      <ReservationsList />
    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
ReservationsPage.propTypes = {
  onMount: PropTypes.func.isRequired,
};

export default ReservationsPage;
