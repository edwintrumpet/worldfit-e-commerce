const initialState = {
  'showMenu': false,
  'userActive': false,
  'users': [
    {
      id: 0,
      name: 'Platzi',
      email: 'platzi@platzi.com',
      password: '',
    },
    {
      id: 1,
      name: 'Sebastian',
      email: 'smarin@360pmi.com',
      password: '123654',
    },
  ],
  'cart': [
    {
      producto: 'chaqueta premium gris',
      precio: 865026,
    },
    {
      producto: 'chaqueta slowmotion negra',
      precio: 764012,
    },
  ],
};

export default initialState;
