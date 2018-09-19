import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as types from '../types';
import { fetchUserSaga } from './auth';
import { addRecordSaga } from './records';

const watchAuth = [takeLatest(types.FETCH_CURRENT_USER, fetchUserSaga)];

const watchRecords = [takeEvery(types.ADD_RECORD, addRecordSaga)];

export default function* watchAll() {
  yield all([...watchAuth, ...watchRecords]);
}
