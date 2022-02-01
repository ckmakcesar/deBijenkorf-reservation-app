import { takeLatest, put, select } from 'redux-saga/effects';
import {
  reservationsListRequest,
  reservationsListRequestSuccess,
  reservationsListRequestFailure,
  reservationStoresListRequestSuccess,
  reservationStatusesListRequestSuccess,
} from '../../actions/reservations';
import reservationService from '../../api/reservationService';
import {
  reservationStoresMapSelector,
  reservationStatusesMapSelector,
} from '../../selectors/reservations';
import { isEmptyObj } from '../../utils/utils';
import { addActionSuccessToast, addActionFailureToast } from '../../utils/toasts';

import { TOAST_LEVELS } from '../../constants/misc';

function* reservationsListRequestWorker({ type }) {
  try {
    const storesMap = yield select(reservationStoresMapSelector);
    if (isEmptyObj(storesMap)) {
      const stores = yield reservationService.getStores();
      yield put(reservationStoresListRequestSuccess(stores));
    }

    const statusesMap = yield select(reservationStatusesMapSelector);
    if (isEmptyObj(statusesMap)) {
      const statuses = yield reservationService.getStatuses();
      yield put(reservationStatusesListRequestSuccess(statuses));
    }

    const reservations = yield reservationService.getAll();
    yield put(reservationsListRequestSuccess(reservations)); // changes state.reservations.loading back to false
    if (reservations.length) {
      addActionSuccessToast(type, TOAST_LEVELS.INFO);
    }
  } catch (error) {
    yield put(reservationsListRequestFailure(error));
    addActionFailureToast(type);
  }
}

export function* reservationsListRequestSaga() {
  yield takeLatest(reservationsListRequest().type, reservationsListRequestWorker);
}
