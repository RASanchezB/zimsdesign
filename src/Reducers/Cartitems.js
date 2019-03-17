const Cartitems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.producto];
    case "REMOVE_FROM_CART":
      state.splice(state.indexOf(action.producto), 1);
      return state;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};
export default Cartitems;
