/**
 * Client application entry point
 */

import {ReactDom} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './ui/rootReduer';

let store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <h1>This is a tests</h1>
  </Provider>
, document.findElementById('application-container'));
