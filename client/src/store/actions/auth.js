import * as actionTypes from '../types';

export const fetchCurrentUser = () => ({
  type: actionTypes.FETCH_CURRENT_USER,
});

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});
