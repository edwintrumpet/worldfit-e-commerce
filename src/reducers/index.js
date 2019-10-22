const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_SHOW_MENU':
      return {
        ...state,
        showMenu: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
