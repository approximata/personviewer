import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap-modal';


const AddButton = ({ onClick }) => (
  <div>
    <button type="button" name="AddButton" onClick={onClick}>Add</button>
  </div>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
