import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
//import axiosMiddleware from 'redux-axios-middleware';

import reducers from './reducers'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware )(createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>, 
  document.getElementById('root'));
 
registerServiceWorker();
