import { takeLatest, put } from 'redux-saga/effects';
import {
  reservationDeleteRequest,
  reservationDeleteRequestSuccess,
  reservationDeleteRequestFailure,
} from '../../actions/reservations';
import reservationService from '../../api/reservationService';
import { addActionSuccessToast, addActionFailureToast } from '../../utils/toasts';

function* reservationDeleteRequestWorker({ type, payload: reservationId }) {
  try {
    yield reservationService.del(reservationId);
    yield put(reservationDeleteRequestSuccess(reservationId));
    addActionSuccessToast(type);
  } catch (error) {
    yield put(reservationDeleteRequestFailure(error));
    addActionFailureToast(type);
  }
}

export function* reservationDeleteRequestSaga() {
  yield takeLatest(reservationDeleteRequest().type, reservationDeleteRequestWorker);
}
