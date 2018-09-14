import * as types from '../types';

export const setLoadingState = isFetching => ({
  type: types.SET_LOADING_STATE,
  payload: isFetching,
});
