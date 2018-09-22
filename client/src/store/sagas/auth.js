import { delay } from 'redux-saga';
import { put, all } from 'redux-saga/effects';
import axios from 'axios';

import { LOADING_MINIMUM_DURATION } from './constants';
import * as actions from '../actions';
import * as flashTypes from '../types/flash';

export function* fetchUserSaga() {
  try {
    yield put(actions.setLoadingState(true));
    const res = yield axios.get('/api/auth/current_user');
    yield delay(LOADING_MINIMUM_DURATION);
    yield all([
      put(actions.setCurrentUser(res.data)),
      put(actions.setLoadingState(false)),
    ]);
  } catch (err) {
    yield all([
      put(actions.addFlash(flashTypes.ERROR, err.response.data.error.message)),
      put(actions.setLoadingState(false)),
    ]);
  }
}
