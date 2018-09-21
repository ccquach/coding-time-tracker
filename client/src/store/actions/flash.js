import * as actionTypes from '../types';

export const addFlash = (type, message) => ({
  type: actionTypes.ADD_FLASH,
  payload: { type, message },
});

export const removeFlash = () => ({
  type: actionTypes.REMOVE_FLASH,
});
