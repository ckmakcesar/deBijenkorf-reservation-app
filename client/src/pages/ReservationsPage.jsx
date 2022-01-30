import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/misc/Header';
import Footer from '../components/misc/Footer';
import Button from '../components/misc/Button';
import ReservationsList from '../components/ReservationsList';
import Drawer from '../components/misc/Drawer';
import Dialog from '../components/misc/Dialog';
import UpsertReservationForm from '../components/UpsertReservationForm';
import Reservation from '../types/Reservation';
import Store from '../types/Store';
import Status from '../types/Status';

import styles from '../styles/ReservationsPage.module.css';

const ReservationsPage = ({
  onMount,
  reservationsMap,
  loading,
  storesMap,
  statusesMap,
  onCreate,
  onUpdate,
  onDelete,
}) => {
  useEffect(() => {
    onMount()
  }, []);

  // 0 -> drawer closed; -1 -> create; positive values -> edit
  const [drawerReservationId, setDrawerReservationId] = useState(0);

  // not null -> open Delete Dialog
  const [reservationToDelete, setReservationToDelete] = useState(null);

  const handleDeleteReservation = () => {
    onDelete(reservationToDelete?.id)
  };

  return (
    <div className={styles.reservationsPageContainer}>
      <Header
        text='Reservations'
      />

      <div className='flex-content'>
        <ReservationsList
          reservationsMap={reservationsMap}
          loading={loading}
          storesMap={storesMap}
          statusesMap={statusesMap}
          setReservationToDelete={setReservationToDelete}
          setDrawerReservationId={setDrawerReservationId}
        />
      </div>

      <Footer>
        <div className={styles.createReservationButton}>
          <Button
            onClick={() => { setDrawerReservationId(-1); }}
            text='Create Reservation'
            boxIconClassName='bx-plus'
            tone='green'
          />
        </div>
      </Footer>

      {/* Overlay Components Below */}

      <Drawer
        isOpen={!!drawerReservationId}
        headerTitle={drawerReservationId === -1 ? 'Create Reservation' : 'Edit Reservation'}
        formId='UpsertReservationForm'
        confirmButtonText={drawerReservationId === -1 ? 'Create' : drawerReservationId > 0 ? 'Save' : ''}
        confirmButtonTone={drawerReservationId === -1 ? 'green' : drawerReservationId > 0 ? 'blue' : ''}
        onClose={() => { setDrawerReservationId(0); }}
        onConfirm={drawerReservationId === -1 ? onCreate : onUpdate}
      >
        <UpsertReservationForm
          key={reservationsMap[drawerReservationId]?.id}
          storesMap={storesMap}
          statusesMap={statusesMap}
          reservation={reservationsMap[drawerReservationId]}
        />
      </Drawer>

      <Dialog
        isOpen={!!reservationToDelete}
        headerTitle='Delete Reservation'
        confirmButtonText='Delete'
        confirmButtonTone='red'
        onClose={() => { setReservationToDelete(null); }}
        onConfirm={handleDeleteReservation}
      >
        <div>
          {`You are about to delete the reservation 
          '${reservationToDelete?.name}'. If you proceed with this 
          action the item will be permanently deleted.`}
        </div>
      </Dialog>
    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
ReservationsPage.propTypes = {
  onMount: PropTypes.func.isRequired,
  reservationsMap: PropTypes.objectOf(PropTypes.exact(Reservation)).isRequired,
  loading: PropTypes.bool.isRequired,
  storesMap: PropTypes.objectOf(PropTypes.exact(Store)).isRequired,
  statusesMap: PropTypes.objectOf(PropTypes.exact(Status)).isRequired,
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReservationsPage;
