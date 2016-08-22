import { connect } from 'react-redux';
import { addPerson } from '../actions';
import App from '../components/App';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showModal(modalName) {
            dispatch(actions.showModal(modalName));
        },

        hideModal(modalName) {
            dispatch(actions.hideModal(modalName));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
