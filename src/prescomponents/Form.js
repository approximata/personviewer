import React from 'react';

const InputPerson = ({onClick}) => {
  let inputName;
  let inputJob;
  let inputAge;
  let inputNick;
  let inputEmployee;
  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        onClick(inputName.value, inputJob.value, inputAge.value, inputNick.value, inputEmployee.value);
        inputName.value = '';
        inputJob.value = '';
        inputAge.value = '';
        inputNick.value = '';
        inputEmployee.value = false;
      }}
    >
      <div className="inputfield">
        <input className="name" type="text" name="inputName" placeholder="insert name"
          ref={node => {
            inputName = node;
          }}
        />
        <input className="job" type="text" name="inputJob" placeholder="insert job title"
          ref={node => {
            inputJob = node;
          }}
        />
        <input className="age" type="number" name="inputAge"
          ref={node => {
            inputAge = node;
          }}
        />
        <input className="nick" type="text" name="inputNick" placeholder="insert nick name"
          ref={node => {
            inputNick = node;
          }}
        />
        <input className="employee" type="checkbox" name="inputEmployee"
          ref={node => {
            inputEmployee = node;
          }}
        />

        <button type="submit">
          Ok
        </button>
      </div>
    </form>
  </div>
);

  InputPerson.propTypes = {
    onClick: PropTypes.func.isRequired
  }
};

export default InputPerson;
