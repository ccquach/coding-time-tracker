import { delay } from 'redux-saga';
import { put, all } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

const LOADING_MINIMUM_DURATION = 3000;

export function* fetchUserSaga() {
  try {
    yield put(actions.setLoadingState(true));
    const res = yield axios.get('/api/auth/current_user');
    yield delay(LOADING_MINIMUM_DURATION);
    yield all([
      put(actions.setCurrentUser(res.data)),
      put(actions.removeError()),
      put(actions.setLoadingState(false)),
    ]);
  } catch (err) {
    yield put(actions.addError(err.message));
  }
}
