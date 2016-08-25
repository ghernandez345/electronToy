/**
 * Client application entry point
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './ui/rootReducer';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <h1>This is a tests</h1>
  </Provider>,
  document.getElementById('application-container')
);
