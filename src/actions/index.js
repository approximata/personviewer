import json from '../../jsonstore/person.json';
// const json = require('./storejson/person.json');

export const storeDataLoaded = (personInfo) => {
  console.log(personInfo);
  return {
    type: 'PERSONINFO_LOADED',
    personInfo,
  };
};

export const storeDataLoading = () => {
  return {
    type: 'PERSONINFO_LOADING',
  };
};

export const storeData = (dispatch) => {
  console.log(json);
  return dispatch(storeDataLoaded(json))

  // const myHeaders = new Headers();
  // const myInit =
  // {
  //   method: 'GET',
  //   headers: myHeaders,
  //   mode: 'cors',
  //   cache: 'default'
  // };
  //
  // fetch(json, myInit).then(function(response) {
  //   console.log(response + "fetch hallo");
  //   return response.json();
  // }).then(function(personResponse) {
  //   console.log(personResponse);
  //   dispatch(storeDataLoaded(personResponse));
  // });
  // return dispatch(storeDataLoading());
};

export const deleteLineAction = (nick) => {
  return {
    type: 'DEL_LINE',
    nick,
  };
};
