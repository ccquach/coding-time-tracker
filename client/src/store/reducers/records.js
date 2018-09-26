import * as actionTypes from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_HOURS_RECORDS:
      return { ...state, ...action.payload };
    case actionTypes.FETCH_HOURS_RECORDS_FAIL:
      return false;
    default:
      return state;
  }
};
