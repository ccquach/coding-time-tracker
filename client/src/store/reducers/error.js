import * as types from '../types';

const DEFAULT_STATE = { message: null };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.ADD_ERROR:
      return { message: action.payload };
    case types.REMOVE_ERROR:
      return { message: null };
    default:
      return state;
  }
};
