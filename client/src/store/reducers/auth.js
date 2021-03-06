import * as actionTypes from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return action.payload || false;
    default:
      return state;
  }
};
