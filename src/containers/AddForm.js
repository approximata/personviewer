import React from 'react';
import { connect } from 'react-redux';
// import { showModal } from '../actions';
import InputPerson from '../prescomponents/Form';

// const visibleForm = (filter) => {
//   switch (filter) {
//     case 'ADD':
//       return true
//     case 'OK':
//       return false
//     case 'CANCEL':
//       return false
//   }
// }
//


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (name, job, age, nick, employee) => {
      dispatch(addPerson(name, job, age, nick, employee));
    },
  };
};

const AddPerson = connect(
  null,
  mapDispatchToProps
)(InputPerson);

export default AddPerson;
