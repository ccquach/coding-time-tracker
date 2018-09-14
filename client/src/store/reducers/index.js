import { combineReducers } from 'redux';

import authReducer from './auth';
import errorReducer from './error';
import loadingReducer from './loading';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  isFetching: loadingReducer,
});
