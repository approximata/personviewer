import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import personApp from './reducers';
import App from './App';
import { storeData } from './actions';
require('./main.css');

let store = createStore(personApp);

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(storeData(store.dispatch));
