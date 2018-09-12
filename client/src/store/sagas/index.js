import { takeLatest, all } from 'redux-saga/effects';

import * as types from '../types';
import { fetchUserSaga } from './auth';

const watchAuth = [takeLatest(types.FETCH_CURRENT_USER, fetchUserSaga)];

export default function* watchAll() {
  yield all([...watchAuth]);
}
