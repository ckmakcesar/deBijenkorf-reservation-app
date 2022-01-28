import keyMirror from 'keymirror';

const ActionType = keyMirror({
  // *******************************************************************************************************************
  // RESERVATIONS
  // *******************************************************************************************************************
  RESERVATIONS_LIST_REQUEST: null,
  RESERVATIONS_LIST_REQUEST_SUCCESS: null,
  RESERVATIONS_LIST_REQUEST_FAILURE: null,
});

export default (ActionType);
