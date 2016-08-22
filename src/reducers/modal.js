const initialState = {
  modalName: null,
};

const modal = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalName,
      };
    case 'HIDE_MODAL'
      return initialState;
    default:
      return state;
  }
};
