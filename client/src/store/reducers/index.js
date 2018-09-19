import { combineReducers } from 'redux';

import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth';
import errorReducer from './error';
import loadingReducer from './loading';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  error: errorReducer,
  isFetching: loadingReducer,
});
