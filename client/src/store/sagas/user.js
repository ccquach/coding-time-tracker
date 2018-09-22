import { put, all } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import * as flashTypes from '../types/flash';

export function* setDailyGoalSaga(action) {
  try {
    const res = yield axios.post('/api/user', { dailyGoal: action.payload });
    yield all([
      put(actions.setCurrentUser(res.data)),
      put(actions.addFlash(flashTypes.SUCCESS, 'Daily goal updated!')),
    ]);
  } catch (err) {
    yield put(
      actions.addFlash(flashTypes.ERROR, err.response.data.error.message)
    );
  }
}
