import keyMirror from 'keymirror';

const ActionType = keyMirror({
  // *******************************************************************************************************************
  // RESERVATIONS
  // *******************************************************************************************************************
  RESERVATIONS_LIST_REQUEST: null,
  RESERVATIONS_LIST_REQUEST_SUCCESS: null,
  RESERVATIONS_LIST_REQUEST_FAILURE: null,

  RESERVATION_STORES_LIST_REQUEST_SUCCESS: null,

  RESERVATION_STATUSES_LIST_REQUEST_SUCCESS: null,

  RESERVATION_CREATE_REQUEST: null,
  RESERVATION_CREATE_REQUEST_SUCCESS: null,
  RESERVATION_CREATE_REQUEST_FAILURE: null,

  RESERVATION_UPDATE_REQUEST: null,
  RESERVATION_UPDATE_REQUEST_SUCCESS: null,
  RESERVATION_UPDATE_REQUEST_FAILURE: null,

  RESERVATION_DELETE_REQUEST: null,
  RESERVATION_DELETE_REQUEST_SUCCESS: null,
  RESERVATION_DELETE_REQUEST_FAILURE: null,

  RESERVATION_DELETE_ALL_REQUESTS: null,
  RESERVATION_DELETE_ALL_REQUESTS_SUCCESS: null,
  RESERVATION_DELETE_ALL_REQUESTS_FAILURE: null,
});

export default (ActionType);
