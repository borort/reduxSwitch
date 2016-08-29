/* @flow */

import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

import SwitchApp from './switchApp';

const reducer = combineReducers(reducers);
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchApp />
      </Provider>
    );
  }
}
