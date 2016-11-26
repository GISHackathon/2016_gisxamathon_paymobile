import App from './app.react';

import goApp from './reducer.js';

require('./less/app.less');

import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export const store = createStoreWithMiddleware(goApp, {});
const target = document.getElementById("app")

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>, target);
