export const ADD_TRIPS = 'ADD_TRIPS';

let TripsReducer = (state = [], action) => {
  switch (action.type) {

    case ADD_TRIPS:
      return [...state, ...action.payload];

    default:
      return state

  }
}
export default TripsReducer; 