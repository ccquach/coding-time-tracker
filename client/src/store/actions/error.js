import * as types from '../types';

export const addError = message => ({
  type: types.ADD_ERROR,
  payload: message,
});

export const removeError = () => ({
  type: types.REMOVE_ERROR,
});
