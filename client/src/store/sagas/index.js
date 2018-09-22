import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../types';
import { fetchUserSaga } from './auth';
import { setDailyGoalSaga } from './user';
import { addRecordSaga } from './records';

const watchAuth = [takeLatest(actionTypes.FETCH_CURRENT_USER, fetchUserSaga)];

const watchUser = [takeEvery(actionTypes.SET_DAILY_GOAL, setDailyGoalSaga)];

const watchRecords = [takeEvery(actionTypes.ADD_RECORD, addRecordSaga)];

export default function* watchAll() {
  yield all([...watchAuth, ...watchUser, ...watchRecords]);
}
