const Cartitems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { carrito: [...state.carrito, action.producto] };
    case "REMOVE_FROM_CART":
      //return state.filter(cartItem => cartItem.id !== action.payload.id);
      let afterDelete = state.filter(book => {
        return book._id !== action.payload._id;
      });
      return afterDelete;
    default:
      return state;
  }
};
export default Cartitems;
