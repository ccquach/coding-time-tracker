import * as actionTypes from '../types';

export const setLoadingState = isFetching => ({
  type: actionTypes.SET_LOADING_STATE,
  payload: isFetching,
});
