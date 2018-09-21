import * as actionTypes from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.ADD_FLASH:
      return action.payload;
    case actionTypes.REMOVE_FLASH:
      return null;
    default:
      return state;
  }
};
