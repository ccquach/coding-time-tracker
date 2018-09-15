import 'materialize-css/dist/css/materialize.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import App from './containers/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
