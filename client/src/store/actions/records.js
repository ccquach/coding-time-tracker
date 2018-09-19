import * as types from '../types';

export const addRecord = values => ({
  type: types.ADD_RECORD,
  payload: values,
});
