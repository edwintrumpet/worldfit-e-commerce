const calcTotalPrice = (carrito) => {
  let inc = 0;
  for (let i = 0; i < carrito.length; i++) {
    inc += carrito[i].maxPrice;
  }
  return inc.toLocaleString('es-CO');
};

export default calcTotalPrice;
