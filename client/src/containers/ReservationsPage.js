import { connect } from 'react-redux';

import { reservationsListRequest } from '../actions/reservations';
import ReservationsPage from '../pages/ReservationsPage';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(reservationsListRequest());
  },
});

export default connect(null, mapDispatchToProps)(ReservationsPage);
