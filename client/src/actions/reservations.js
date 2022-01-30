import ActionType from '../types/actionType';

export const reservationsListRequest = () => ({
  type: ActionType.RESERVATIONS_LIST_REQUEST,
});
export const reservationsListRequestSuccess = (reservations) => ({
  type: ActionType.RESERVATIONS_LIST_REQUEST_SUCCESS,
  payload: reservations,
});
export const reservationsListRequestFailure = (error) => ({
  type: ActionType.RESERVATIONS_LIST_REQUEST_FAILURE,
  error,
});

export const reservationCreateRequest = (reservation) => ({
  type: ActionType.RESERVATION_CREATE_REQUEST,
  payload: reservation,
});
export const reservationCreateRequestSuccess = (reservation) => ({
  type: ActionType.RESERVATION_CREATE_REQUEST_SUCCESS,
  payload: reservation,
});
export const reservationCreateRequestFailure = (error) => ({
  type: ActionType.RESERVATION_CREATE_REQUEST_FAILURE,
  error,
});

export const reservationUpdateRequest = (reservation) => ({
  type: ActionType.RESERVATION_UPDATE_REQUEST,
  payload: reservation,
});
export const reservationUpdateRequestSuccess = (reservation) => ({
  type: ActionType.RESERVATION_UPDATE_REQUEST_SUCCESS,
  payload: reservation,
});
export const reservationUpdateRequestFailure = (error) => ({
  type: ActionType.RESERVATION_UPDATE_REQUEST_FAILURE,
  error,
});

export const reservationDeleteRequest = (reservationId) => ({
  type: ActionType.RESERVATION_DELETE_REQUEST,
  payload: reservationId,
});
export const reservationDeleteRequestSuccess = (reservationId) => ({
  type: ActionType.RESERVATION_DELETE_REQUEST_SUCCESS,
  payload: reservationId,
});
export const reservationDeleteRequestFailure = (error) => ({
  type: ActionType.RESERVATION_DELETE_REQUEST_FAILURE,
  error,
});

export const reservationStoresListRequestSuccess = (reservations) => ({
  type: ActionType.RESERVATION_STORES_LIST_REQUEST_SUCCESS,
  payload: reservations,
});

export const reservationStatusesListRequestSuccess = (reservations) => ({
  type: ActionType.RESERVATION_STATUSES_LIST_REQUEST_SUCCESS,
  payload: reservations,
});
