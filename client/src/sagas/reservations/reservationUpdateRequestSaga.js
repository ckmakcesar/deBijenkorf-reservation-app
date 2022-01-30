import { takeLatest, put } from 'redux-saga/effects';
import {
  reservationUpdateRequest,
  reservationUpdateRequestSuccess,
  reservationUpdateRequestFailure,
} from '../../actions/reservations';
import reservationService from '../../api/reservationService';
import { addActionSuccessToast, addActionFailureToast } from '../../utils/toasts';

function* reservationUpdateRequestWorker({ type, payload: reservation }) {
  try {
    if (isNaN(parseInt(reservation.id))) throw new Error('reservation object should contain id');

    const updatedReservation = yield reservationService.update(reservation);
    yield put(reservationUpdateRequestSuccess(updatedReservation));
    addActionSuccessToast(type);
  } catch (error) {
    yield put(reservationUpdateRequestFailure(error));
    addActionFailureToast(type);
  }
}

export function* reservationUpdateRequestSaga() {
  yield takeLatest(reservationUpdateRequest().type, reservationUpdateRequestWorker);
}
