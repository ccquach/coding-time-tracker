import { delay } from 'redux-saga';
import { put, all } from 'redux-saga/effects';
import axios from 'axios';

import { LOADING_MINIMUM_DURATION } from './constants';
import * as actions from '../actions';

export function* addRecordSaga(action) {
  const { date, hoursCoded } = action.payload;
  try {
    yield put(actions.setLoadingState(true));
    yield axios.post('/api/records', { date, hoursCoded });
    yield delay(LOADING_MINIMUM_DURATION);
    yield all([
      put(actions.removeError()),
      put(actions.setLoadingState(false)),
    ]);
  } catch (err) {
    yield all([
      put(actions.addError(err.message)),
      put(actions.setLoadingState(false)),
    ]);
  }
}
