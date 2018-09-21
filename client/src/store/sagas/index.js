import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../types';
import { fetchUserSaga } from './auth';
import { addRecordSaga } from './records';

const watchAuth = [takeLatest(actionTypes.FETCH_CURRENT_USER, fetchUserSaga)];

const watchRecords = [takeEvery(actionTypes.ADD_RECORD, addRecordSaga)];

export default function* watchAll() {
  yield all([...watchAuth, ...watchRecords]);
}
