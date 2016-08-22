import React, { PropTypes } from 'react';
import { ShowModal } from 'redux-basic-modal';

const AddButton = ({ onClick }) => (
  <div>
    <button type="button" name="AddButton" onClick={onClick}>Add</button>
    <ShowModal modalName='HelloModal'>Show</ShowModal>
  </div>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
