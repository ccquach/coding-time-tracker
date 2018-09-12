import * as types from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return action.payload || false;
    default:
      return state;
  }
};
