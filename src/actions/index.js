import json from '../../jsonstore/person.json';

export const storeDataLoaded = (personInfo) => {
  return {
    type: 'PERSONINFO_LOADED',
    personInfo,
  };
};

export const storeData = (dispatch) => {
  return dispatch(storeDataLoaded(json));
};

export const showModal = (modalName) => {
  return {
    type: 'SHOW_MODAL',
    modalName,
  };
};

export const hideModal = (modalName) => {
  return {
    type: 'HIDE_MODAL',
    modalName,
  };
};

export const addPerson = (name, job, age, nick, employee) => {
  return {
    type: 'ADD_PERSON',
    name,
    job,
    age,
    nick,
    employee
  };
};

export const deleteLineAction = (nick) => {
  return {
    type: 'DEL_LINE',
    nick,
  };
};
