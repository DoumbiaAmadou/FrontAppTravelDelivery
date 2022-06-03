import { combineReducers, createStore } from 'redux'
import TripsReducer from '../reducers/TripsReducer'
import AuthReducer from '../reducers/authReducer'

export default createStore(
  combineReducers({
       auth : AuthReducer, 
       allTrips: TripsReducer,

  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)