import React, { PropTypes } from 'react';
import Person from './Person';

const PersonList = ({ persons, onPersonClick }) => (
  <div className="Table">
    <div className="Table-row Table-header">
      <div className="Table-row-item Table-name">Name job title</div>
      <div className="Table-row-item Table-age">Age</div>
      <div className="Table-row-item">Nickname</div>
      <div className="Table-row-item Table-employee">Employee</div>
      <div className="Table-row-item">Action</div>
    </div>
    <div className="personlist" name="listed">
      {persons.map(person =>
        <Person
          key={person.nick}
          {...person}
          onClick={() => onPersonClick(person.nick)}
        />
        )}
    </div>
  </div>
);

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    employee: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onPersonClick: PropTypes.func.isRequired,
};

export default PersonList;
