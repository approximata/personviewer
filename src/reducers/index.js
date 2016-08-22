import { combineReducers } from 'redux';
// import modal from './modal';
// import { reducer as modal } from 'redux-modal';
import person from './person';
import datadump from './datadump';

const personApp = combineReducers({
  person,
  datadump,
  // modal,
});

export default personApp;
