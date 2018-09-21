import * as actionTypes from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_STATE:
      return action.payload;
    default:
      return state;
  }
};
