import ActionType from '../types/actionType';
import { mapByKey } from '../utils/utils';

const initialState = {
  loading: false,
  reservationsMap: {},
};

const reservations = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESERVATIONS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.RESERVATIONS_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationsMap: {
          ...state.reservationsMap,
          ...mapByKey(action.payload, 'id'),
        }
      };
    case ActionType.RESERVATIONS_LIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reservations;
