const ActionType = require('../types/actionType').default;

module.exports = {
  // [ActionType.RESERVATIONS_LIST_REQUEST_SUCCESS]: 'TESTING', // !!!
  [ActionType.RESERVATIONS_LIST_REQUEST_FAILURE]: 'Failed to list reservations',

  [ActionType.RESERVATION_CREATE_REQUEST_SUCCESS]: 'Reservation created',
  [ActionType.RESERVATION_CREATE_REQUEST_FAILURE]: 'Failed to create reservation',

  [ActionType.RESERVATION_UPDATE_REQUEST_SUCCESS]: 'Reservation updated',
  [ActionType.RESERVATION_UPDATE_REQUEST_FAILURE]: 'Failed to update reservation',

  [ActionType.RESERVATION_DELETE_REQUEST_SUCCESS]: 'Reservation deleted',
  [ActionType.RESERVATION_DELETE_REQUEST_FAILURE]: 'Failed to delete reservation',
};
