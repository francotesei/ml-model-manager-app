import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import  reducers  from './reducers/index';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initState = {
  enthusiasm: {
    enthusiasmLevel: 10,
    languageName: 'TypeScript',
  }
}

const store = createStore(reducers, initState.enthusiasm);
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
