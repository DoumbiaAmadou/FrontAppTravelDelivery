const initialState = [];

export const DETAIL_SHOW = 'DETAIL_SHOW';

function DetailShowReducer(state = initialState, action) {
  switch (action.type) {
    case DETAIL_SHOW:
      return state.find(element => element._id === action.payload._id);
    default:
      return [];
  }
}
export default DetailShowReducer; 
