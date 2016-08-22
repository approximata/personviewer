import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-basic-modal';
import person from './person';

const personApp = combineReducers({
  modal,
  person,
});

export default personApp;
