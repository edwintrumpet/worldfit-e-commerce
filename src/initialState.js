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
  'products': [
    {
      id: 0,
      nameProduct: 'Top Deportivo',
      description: 'Top sin arco con copas triangulartes y con buen cubrimiento del busto, al interior están forradas con tela suave para dar mayor confort y evitar marcas. Suave elástico ancho en la base que se ajusta perfectamente al cuerpo brindando gran sostenimiento y cuenta con cargaderas ajustables',
      minPrice: 0,
      maxPrice: 100000,
      mainImage: '../src/assets/static/temp/top/top-1.jpg',
      backImage: '../src/assets/static/temp/top/top-2.jpg',
      tags: [
        'mujer', 'destacado',
      ],
    },
    {
      id: 1,
      nameProduct: 'Buso',
      description: 'Fabricado en tela licrada, Con microporos transpirable, Ideal para entrenamiento deportivo',
      minPrice: 0,
      maxPrice: 40000,
      mainImage: '../src/assets/static/temp/buso/buso-1.jpg',
      backImage: '../src/assets/static/temp/buso/buso-2.jpg',
      tags: [
        'hombre',
      ],
    },
    {
      id: 3,
      nameProduct: 'Sudadera',
      description: 'Combinando los icónicos looks Nike Tech Pack del pasado, los pantalones Nike Sportswear Tech Fleece para mujer brindan calidez liviana con detalles modernos como cremalleras en los tobillos y detalles unidos.',
      minPrice: 40000,
      maxPrice: 45000,
      mainImage: '../src/assets/static/temp/sudadera/sudadera-1.jpg',
      backImage: '../src/assets/static/temp/sudadera/sudadera-2.jpg',
      tags: [
        'mujer',
      ],
    },
    {
      id: 4,
      nameProduct: 'Jogger',
      description: 'Fabricado en algodón licrado Elásticos en tobillos y cabera Bolsillo trasero para objetos pequeños Confortable y cómodo –unisex Especial para el dia de pierna',
      minPrice: 0,
      maxPrice: 67000,
      mainImage: '../src/assets/static/temp/jogger/jogger-1.jpg',
      backImage: '../src/assets/static/temp/jogger/jogger-2.jpg',
      tags: [
        'hombre',
      ],
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
