import * as actionTypes from '../types';

export const addRecord = values => ({
  type: actionTypes.ADD_RECORD,
  payload: values,
});
