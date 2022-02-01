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
import { isEmptyObj } from '../utils/utils.js';

import styles from '../styles/ReservationsPage.module.css';

const deleteOnePrompt = (reservation) => `You are about to delete the reservation 
'${reservation?.name}'. If you proceed with this 
action the item will be permanently deleted.`;

const deleteAllPrompt = `You are about to delete ALL reservations . If you proceed with this 
action the items will be permanently deleted.`;

const ReservationsPage = ({
  onMount,
  reservationsMap,
  loading,
  storesMap,
  statusesMap,
  onCreate,
  onUpdate,
  onDeleteOne,
  onDeleteAll,
}) => {
  useEffect(() => {
    onMount()
  }, []);

  // 0 -> drawer closed; -1 -> create; positive values -> edit
  const [drawerReservationId, setDrawerReservationId] = useState(0);

  // null -> Dialog closed; -1 -> Dialog for delete ALL; others -> Dialog for Delete One Reservation
  const [reservationToDelete, setReservationToDelete] = useState(null);

  const handleDeleteReservation = () => {
    onDeleteOne(reservationToDelete?.id);
  };

  const aboutToDeleteAll = (reservationToDelete === -1);

  return (
    <div className={styles.reservationsPageContainer}>
      <Header
        text='Reservations'
        id='reservations-page' // will be modified down the components to make tag id unique
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

      <Footer
        id='reservations-page' // will be modified down the components to make tag id unique
      >
        <div className={styles.reservartionsPageFooter}>
          <Button
            onClick={() => { setReservationToDelete(-1); }}
            text='Delete All'
            boxIconClassName='bx-trash'
            tone='red'
            disabled={isEmptyObj(reservationsMap)}
            id='delete-all'
          />

          <Button
            onClick={() => { setDrawerReservationId(-1); }}
            text='Create Reservation'
            boxIconClassName='bx-plus'
            tone='green'
            id='create-reservation'
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
        id='create-reservation'
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
        headerTitle={aboutToDeleteAll ? 'Delete All Reservations' : 'Delete Reservation'}
        confirmButtonText={aboutToDeleteAll ? 'Delete All' : 'Delete'}
        confirmButtonTone='red'
        onClose={() => { setReservationToDelete(null); }}
        onConfirm={aboutToDeleteAll
          ? () => onDeleteAll()
          : (reservationId) => handleDeleteReservation(reservationId)
        }
        id='delete-reservation'
      >
        <div className={styles.dialogContent}>
          {aboutToDeleteAll ? deleteAllPrompt : deleteOnePrompt(reservationToDelete)}
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
  onDeleteOne: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
};

export default ReservationsPage;
