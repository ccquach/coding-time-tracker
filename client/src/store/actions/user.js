import * as actionTypes from '../types';

export const setDailyGoal = dailyGoal => ({
  type: actionTypes.SET_DAILY_GOAL,
  payload: dailyGoal,
});
