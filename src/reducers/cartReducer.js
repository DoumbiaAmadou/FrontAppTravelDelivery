let initialAuth = [];
let getLocalAuth = () => {
  let cart = JSON.parse(sessionStorage.getItem("CART"));

  console.log("CART", cart);
  if (cart) {
    return cart;
  } else {
    sessionStorage.setItem("CART", JSON.stringify(initialAuth));
    return initialAuth;
  }
};

export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const ADD_RESERVATION = "ADD_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const VALIDATE_RESERVATION = "VALIDATE_RESERVATION";

function cartReducer(state = getLocalAuth(), action) {
  let newCart;
  switch (action.type) {
    case ADD_RESERVATION:
      //TODO: add new Cart By ID.
      let isUpdated = false;
      newCart = state.map((element) => {
        if (element._id === action.payload._id) {
          isUpdated = true;
          return {
            ...element,
            quantity: element.quantity + action.payload.quantity,
          };
        } else return element;
      });

      if (!isUpdated) {
        newCart = [...newCart, action.payload];
      }

      sessionStorage.setItem("CART", JSON.stringify(newCart));
      return newCart;

    case UPDATE_RESERVATION:
      newCart = state.map((element) =>
        element._id === action.payload._id
          ? {
              ...element,
              quantity: action.payload.quantity,
            }
          : element
      );
      return newCart;

    case REMOVE_RESERVATION:
      newCart = state.filter((element) => element._id !== action.payload._id);
      sessionStorage.setItem("CART", JSON.stringify(newCart));
      return newCart;
    default:
      return state;
  }
}

export default cartReducer;
