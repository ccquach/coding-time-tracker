import { delay } from 'redux-saga';
import { put, all } from 'redux-saga/effects';
import axios from 'axios';

import { LOADING_MINIMUM_DURATION } from './constants';
import * as actions from '../actions';
import * as flashTypes from '../types/flash';

export function* addRecordSaga(action) {
  const { date, hoursCoded } = action.payload;
  try {
    yield put(actions.setLoadingState(true));
    yield axios.post('/api/records', { date, hoursCoded });
    yield delay(LOADING_MINIMUM_DURATION);
    yield all([
      put(actions.setLoadingState(false)),
      put(actions.addFlash(flashTypes.SUCCESS, 'Hours successfully recorded!')),
    ]);
  } catch (err) {
    yield all([
      put(actions.addFlash(flashTypes.ERROR, err.response.data.error.message)),
      put(actions.setLoadingState(false)),
    ]);
  }
}

export function* fetchHoursRecordsSaga() {
  try {
    const res = yield axios.get('/api/records');
    yield put(actions.setHoursRecords(res.data));
  } catch (err) {
    yield all([
      put(actions.fetchHoursRecordsFail()),
      put(actions.addFlash(flashTypes.ERROR, err.response.data.error.message)),
    ]);
  }
}
