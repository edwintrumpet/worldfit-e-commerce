const initialState = {
  'showMenu': false,
  'userActive': undefined,
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
  'products': [],
  'cart': [
    {
      nameProduct: 'Jogger',
      maxPrice: 67000,
      minPrice: 0,
      images: [
        '../src/assets/static/temp/jogger/jogger-1.jpg',
        '../src/assets/static/temp/jogger/jogger-2.jpg'
      ],
      tags: [
        'hombre',
      ],
      id: '5dd7356006798308475f5016'
    },
    {
      nameProduct: 'Sudadera',
      maxPrice: 45000,
      minPrice: 40000,
      images: [
        '../src/assets/static/temp/sudadera/sudadera-1.jpg',
        '../src/assets/static/temp/sudadera/sudadera-2.jpg'
      ],
      tags: [
        'mujer'
      ],
      id: '5dd7356006798308475f50a15'
    },
  ],
};

export default initialState;
