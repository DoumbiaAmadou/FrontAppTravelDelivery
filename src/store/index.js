import { combineReducers, createStore } from 'redux'
import TripsReducer from '../reducers/TripsReducer'


export default createStore(
  combineReducers({
    allTrips: TripsReducer,
    
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)