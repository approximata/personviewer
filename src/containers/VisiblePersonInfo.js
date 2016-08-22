import { connect } from 'react-redux';
import PersonList from '../prescomponents/PersonList';
import { deleteLineAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    persons: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonClick: (nick) => {
      console.log("delete action dispatching");
      dispatch(deleteLineAction(nick));
    },
  };
};

const VisiblePersonInfo = connect(mapStateToProps, mapDispatchToProps)(PersonList);

export default VisiblePersonInfo;
