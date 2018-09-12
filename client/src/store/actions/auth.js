import * as types from '../types';

export const fetchCurrentUser = () => ({
  type: types.FETCH_CURRENT_USER,
});

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});
