import * as types from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case types.SET_LOADING_STATE:
      return action.payload;
    default:
      return state;
  }
};
