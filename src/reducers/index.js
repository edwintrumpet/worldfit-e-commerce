const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_SHOW_MENU':
      return {
        ...state,
        showMenu: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        userActive: action.payload.id,
        users: [...state.users, action.payload],
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        userActive: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
