import 'materialize-css/dist/css/materialize.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import App from './containers/App';

// +++++++++ debugging +++++++++
import moment from 'moment';
import axios from 'axios';
window.moment = moment;
window.axios = axios;

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root')
);
