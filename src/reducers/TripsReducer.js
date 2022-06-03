export const LOAD_TRIPS = 'LOAD_TRIPS';

let TripsReducer = (state = [], action) => {
  switch (action.type) {

    case LOAD_TRIPS:
      return [...action.payload];

    default:
      return state

  }
}
export default TripsReducer; 