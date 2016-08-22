export default (state, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return {
                ...state,
                [action.modalName]: {
                    ...action.props,
                    shown: true
                }
            };
        case "HIDE_MODAL":
            return {
                ...state,
                [action.modalName]: {
                    ...action.props,
                    shown: false
                }
            };
        default:
            return { ...state };
    }
}
