import {createStore, combineReducers} from 'redux';
import coursesListReducer from '../reducers/coursesListReducer.js';

export default () => {
  const store = createStore(
    combineReducers({
      courses: coursesListReducer
    })
  );
  return store;
};
