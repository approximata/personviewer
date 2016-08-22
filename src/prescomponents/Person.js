import React, { PropTypes } from 'react';

const Person = ({ onClick, name, job, age, nick, employee }) => (
  <div className="Table-row">
    <div className="Table-row-item" data-header="Name"><p>{name}</p><p>{job}</p></div>
    <div className="Table-row-item" data-header="age">{age}</div>
    <div className="Table-row-item" data-header="Nickname">{nick}</div>
    <div className="Table-row-item" data-header="Employee">
      <label><input type="checkbox" checked={employee} readOnly></input></label>
    </div>
    <div className="Table-row-item" onClick={onClick} data-header="Action">Delete</div>
  </div>
);

Person.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  employee: PropTypes.bool.isRequired,
};

export default Person;
