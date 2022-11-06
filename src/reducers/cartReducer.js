let initialAuth = [];
let getLocalAuth = () => {
  let cart = JSON.parse(sessionStorage.getItem('CART'));

  console.log('CART', cart);
  if (cart) {
    return cart;
  } else {
    sessionStorage.setItem('CART', JSON.stringify(initialAuth))
    return initialAuth;
  }
};


export const UPDATE_RESERVATION = 'UPDATE_RESERVATION'
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const VALIDATE_RESERVATION = 'VALIDATE_RESERVATION';


function cartReducer(state = getLocalAuth(), action) {
  let newCart;
  switch (action.type) {

    case ADD_RESERVATION:
      //TODO: add new Cart By ID. 
      let isAlreadyInCart = state.filter(element => element._id === action.payload._id);
      if (isAlreadyInCart.length > 0) {
        newCart = state.map(element => (element._id === action.payload._id) ? {
          ...isAlreadyInCart[0],
          quantity: isAlreadyInCart[0].quantity + action.payload.quantity
        } : element)

      } else {
        newCart = [...state, action.payload]
      }

      sessionStorage.setItem('CART', JSON.stringify(newCart));
      return newCart; // payload eg: {tipId: 00000, kilosReserved:4 , kiloReservedPrice: 10, priceTotal : 80 , date_Res: 11/11/2022, } 
    case UPDATE_RESERVATION:
      //TODO: add new Cart By ID. 
      let findedElement = state.filter(element => element._id === action.payload._id);
      if (findedElement.length > 0) {
        newCart = state.map(element => (element._id === action.payload._id) ? {
          ...findedElement[0],
          quantity: action.payload.quantity
        } : element)

      } else {
        newCart = [...state, action.payload]
      }

      return newCart;
    case REMOVE_RESERVATION:
      newCart = state.filter((element) => element !== action.payload);
      sessionStorage.setItem('CART', JSON.stringify(newCart));
      return newCart;
    default:
      return state
  }
}

export default cartReducer;