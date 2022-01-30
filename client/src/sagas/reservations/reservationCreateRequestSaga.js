import { takeLatest, put } from 'redux-saga/effects';
import {
  reservationCreateRequest,
  reservationCreateRequestSuccess,
  reservationCreateRequestFailure,
} from '../../actions/reservations';
import reservationService from '../../api/reservationService';
import { addActionSuccessToast, addActionFailureToast } from '../../utils/toasts';

function* reservationCreateRequestWorker({ type, payload: reservation }) {
  try {
    const createdReservation = yield reservationService.create(reservation);
    yield put(reservationCreateRequestSuccess(createdReservation));
    addActionSuccessToast(type);
  } catch (error) {
    yield put(reservationCreateRequestFailure(error));
    addActionFailureToast(type);
  }
}

export function* reservationCreateRequestSaga() {
  yield takeLatest(reservationCreateRequest().type, reservationCreateRequestWorker);
}
