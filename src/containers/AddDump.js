import { connect } from 'react-redux';
import DumpData from '../prescomponents/DumpData';

const mapStateToProps = (state) => {
  return {
    datadump: state.datadump,
  };
};

const AddDump = connect(
  mapStateToProps
)(DumpData);

export default AddDump;
