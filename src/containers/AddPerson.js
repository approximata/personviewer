'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';
import InputPerson from '../prescomponents/Form';


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (name, job, age, nick, employee) => {
      dispatch(addPerson(name, job, age, nick, employee))
    },
  };
};

const AddPerson = connect(
  null,
  mapDispatchToProps
)(InputPerson);

export default AddPerson;
