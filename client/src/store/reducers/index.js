import { combineReducers } from 'redux';

import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth';
import loadingReducer from './loading';
import flashReducer from './flash';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  isFetching: loadingReducer,
  flash: flashReducer,
});
