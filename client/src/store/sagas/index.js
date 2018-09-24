import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../types';
import { fetchCurrentUserSaga } from './auth';
import { setDailyGoalSaga } from './user';
import { addRecordSaga, fetchHoursRecordsSaga } from './records';

const watchAuth = [
  takeLatest(actionTypes.FETCH_CURRENT_USER, fetchCurrentUserSaga),
];

const watchUser = [takeEvery(actionTypes.SET_DAILY_GOAL, setDailyGoalSaga)];

const watchRecords = [
  takeEvery(actionTypes.ADD_RECORD, addRecordSaga),
  takeEvery(actionTypes.FETCH_HOURS_RECORDS, fetchHoursRecordsSaga),
];

export default function* watchAll() {
  yield all([...watchAuth, ...watchUser, ...watchRecords]);
}
