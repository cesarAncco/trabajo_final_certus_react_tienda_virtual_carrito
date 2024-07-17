const CarroReducer = (state, action) => {
  switch (action.type) {
    case 'ANADIR_CARRO':
      // añadir producto al carro
      return {
        ...state,
        carro: state.carro.find((item) => item.id === action.product.id)
          ? state.carro.map((item) =>
              item.id === action.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.carro, { ...action.product, quantity: 1 }],
        total: {
          cantidad: state.total.cantidad + 1,
          monto: state.total.monto + Math.round(action.product.price),
        },
      };
    case 'QUITAR_CARRO':
      // quitar producto del carro
      return {
        ...state,
        carro: state.carro.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total: {
          cantidad: state.total.cantidad - 1,
          monto: state.total.monto - Math.round(action.product.price),
        },
      };
    case 'ELIMINAR_CARRO':
      // eliminar producto del carro
      return {
        ...state,
        carro: state.carro.filter((item) => item.id !== action.product.id),
        total: {
          cantidad: state.total.cantidad - action.product.quantity,
          monto: state.total.monto - Math.round(action.product.price) * action.product.quantity,
        },
      };
    default:
      return state;
  }
};

export default CarroReducer;