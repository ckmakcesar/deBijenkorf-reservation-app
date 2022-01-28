import { takeLatest, put } from 'redux-saga/effects';
import {
  reservationsListRequest,
  reservationsListRequestSuccess,
  reservationsListRequestFailure,
} from '../../actions/reservations';

import reservationService from '../../api/reservationService';

function* reservationsListRequestWorker() {
  try {
    const reservations = yield reservationService.getAll();
    yield put(reservationsListRequestSuccess(reservations));
  } catch (error) {
    yield put(reservationsListRequestFailure(error));
  }
}

export function* reservationsListRequestSaga() {
  yield takeLatest(reservationsListRequest().type, reservationsListRequestWorker);
}
