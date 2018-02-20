import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import configureStore from './store/configureStore.js'
import { addCourse } from './actions/addCourse.js';
import AppRouter from './routers/AppRouter.js';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const state = store.getState();
console.log(store.getState());

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
