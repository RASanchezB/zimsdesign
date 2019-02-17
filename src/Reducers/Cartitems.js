const Cartitems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { carrito: [...state.carrito, action.producto] };
    case "REMOVE_FROM_CART":
      state.carrito.splice(state.carrito.indexOf(action.producto), 1);
      return state;
    default:
      return state;
  }
};
export default Cartitems;
