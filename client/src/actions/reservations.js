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
