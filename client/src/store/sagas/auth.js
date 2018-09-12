import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* fetchUserSaga() {
  try {
    const res = yield axios.get('/auth/current_user');
    yield put(actions.setCurrentUser(res.data));
  } catch (err) {
    // TODO: add error handling
  }
}
