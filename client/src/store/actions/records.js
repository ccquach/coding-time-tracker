import * as actionTypes from '../types';

export const addRecord = values => ({
  type: actionTypes.ADD_RECORD,
  payload: values,
});

export const fetchHoursRecords = () => ({
  type: actionTypes.FETCH_HOURS_RECORDS,
});

export const setHoursRecords = data => ({
  type: actionTypes.SET_HOURS_RECORDS,
  payload: data,
});

export const fetchHoursRecordsFail = () => ({
  type: actionTypes.FETCH_HOURS_RECORDS_FAIL,
});
