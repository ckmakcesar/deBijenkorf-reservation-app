import { connect } from 'react-redux';

import { reservationsMapSelector, reservationsLoadingSelector } from '../selectors/reservations';
import ReservationsList from '../components/ReservationsList';

const mapStateToProps = (state) => ({
  reservationsMap: reservationsMapSelector(state),
  loading: reservationsLoadingSelector(state),
});

export default connect(mapStateToProps)(ReservationsList);
