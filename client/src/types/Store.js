import * as PropTypes from 'prop-types';

const Store = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Store;
