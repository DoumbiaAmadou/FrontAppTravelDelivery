let intialState = [];



export const FILTER_ACTION = 'FILTER_ACTION';


function FilterReducer(state = intialState, action) {
  switch (action.type) {
    
    case FILTER_ACTION:
      return state.filter(element => action.filterWords.some(word => state.description.includes(word)));
    default:
      return state
  }
}


export default FilterReducer;
