import { takeLatest, put } from 'redux-saga/effects';
import {
  reservationDeleteAllRequest,
  reservationDeleteAllRequestSuccess,
  reservationDeleteAllRequestFailure,
} from '../../actions/reservations';
import reservationService from '../../api/reservationService';
import { addActionSuccessToast, addActionFailureToast } from '../../utils/toasts';

function* reservationDeleteAllRequestWorker({ type }) {
  try {
    yield reservationService.deleteAll();
    yield put(reservationDeleteAllRequestSuccess());
    addActionSuccessToast(type);
  } catch (error) {
    yield put(reservationDeleteAllRequestFailure(error));
    addActionFailureToast(type);
  }
}

export function* reservationDeleteAllRequestSaga() {
  yield takeLatest(reservationDeleteAllRequest().type, reservationDeleteAllRequestWorker);
}
