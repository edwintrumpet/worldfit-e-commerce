export const activateShowMenu = (payload) => ({
  type: 'ACTIVATE_SHOW_MENU',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logOutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const loadProducts = (payload) => ({
  type: 'LOAD_PRODUCTS',
  payload,
});

export const addCart = (payload) => {
  return ({
    type: 'ADD_TO_CART',
    payload,
  });
};

export const removeCart = (payload) => {
  return ({
    type: 'REMOVE_TO_CART',
    payload,
  });
};
