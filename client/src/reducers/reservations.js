import ActionType from '../types/actionType';
import { mapByKey, removeObjProps } from '../utils/utils';

const initialState = {
  loading: false,
  reservationsMap: {},
  storesMap: {},
  statusesMap: {},
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
          ...mapByKey(action.payload, 'id'), // TODO: paging?
        }
      };
    case ActionType.RESERVATIONS_LIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.RESERVATION_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.RESERVATION_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationsMap: {
          ...state.reservationsMap,
          ...mapByKey([action.payload], 'id'),
        }
      };
    case ActionType.RESERVATION_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.RESERVATION_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.RESERVATION_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationsMap: {
          ...state.reservationsMap,
          ...mapByKey([action.payload], 'id'),
        }
      };
    case ActionType.RESERVATION_UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.RESERVATION_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.RESERVATION_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationsMap: {
          ...removeObjProps(state.reservationsMap, action.payload),
        }
      };
    case ActionType.RESERVATION_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.RESERVATION_DELETE_ALL_REQUESTS:
      return {
        ...state,
        loading: true,
      };
    case ActionType.RESERVATION_DELETE_ALL_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationsMap: {}
      };
    case ActionType.RESERVATION_DELETE_ALL_REQUESTS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.RESERVATION_STORES_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        storesMap: mapByKey(action.payload, 'id'),
      };

    case ActionType.RESERVATION_STATUSES_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        statusesMap: mapByKey(action.payload, 'id'),
      };

    case ActionType.RESERVATION_LOADING_COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reservations;
