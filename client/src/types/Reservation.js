import * as PropTypes from 'prop-types';

const Reservation = {
  id: PropTypes.number.isRequired,
  storeId: PropTypes.number.isRequired,
  statusId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Reservation;
