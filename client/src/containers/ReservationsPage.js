import { connect } from 'react-redux';

import {
  reservationsMapSelector,
  reservationsLoadingSelector,
  reservationStoresMapSelector,
  reservationStatusesMapSelector,
} from '../selectors/reservations';
import { 
  reservationsListRequest,
  reservationCreateRequest,
  reservationUpdateRequest,
  reservationDeleteRequest,
  reservationDeleteAllRequest,
 } from '../actions/reservations';
import ReservationsPage from '../pages/ReservationsPage';

const mapStateToProps = (state) => ({
  reservationsMap: reservationsMapSelector(state),
  loading: reservationsLoadingSelector(state),
  storesMap: reservationStoresMapSelector(state),
  statusesMap: reservationStatusesMapSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(reservationsListRequest());
  },
  onCreate: (reservation) => {
    dispatch(reservationCreateRequest(reservation));
  },
  onUpdate: (reservation) => {
    dispatch(reservationUpdateRequest(reservation));
  },
  onDeleteOne: (reservationId) => {
    dispatch(reservationDeleteRequest(reservationId));
  },
  onDeleteAll: () => {
    dispatch(reservationDeleteAllRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsPage);
