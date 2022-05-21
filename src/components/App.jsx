import NavBar from "./Navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import HomeStore from "./Home";
import '../css/App.css';
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import Profile from "./Profile";
import { Provider } from "react-redux";
import store from '../store'
import { useEffect } from "react";
import { ADD_TRIPS } from '../reducers/TripsReducer'

function App() {


  useEffect(() => {
    fetch('http://localhost:3000/trip').then(res => res.json())
      .then(json => {
        console.log(json.trips[0])
        store.dispatch({
          type: ADD_TRIPS,
          payload: json.trips
        })
      })
    // store.dispatch({
    //   type: ADD_TRIPS,
    //   payload: [{
    //     "reservations": ["626a6abc2b1ed94740fdfeb3", "626ae859cf7668471443a390"],
    //     "_id": "62673b7db9ca6422d32a8e62",
    //     "default": [], "description": "un Bon petit weekend .",
    //     "cityFrom": "Madrid", "cityTo": "Abidjan",
    //     "departureDate": "2022-05-11T22:00:00.000Z",
    //     "arrivaldate": "2022-05-13T22:00:00.000Z", "kiloPrice": 5.99, "avalaiblekilos": 20, "tripsStatus": "RESERVATION",
    //     "images": ["http://localhost:3000/uploads/1650932732915buildings-7109918_640.jpg"], "__v": 0, "request": { "type": "GET", "url": "http://localhost:3000/trips/62673b7db9ca6422d32a8e62" }
    //   }, {
    //     "reservations": ["626bc40630f42a41a882ad5e", "626bc67786bb2f108035981c"],
    //     "_id": "62673bfcbcc7c024334906d5",
    //     "description": "un petit weekend à playa de cataluna disponible dimanche soir pour recupérer vos colis et livraison a pris lundi 20h à chatelet.",
    //     "cityFrom": "Barcelone",
    //     "cityTo": "Paris",
    //     "departureDate": "2022-05-11T22:00:00.000Z",
    //     "arrivaldate": "2022-05-13T22:00:00.000Z",
    //     "kiloPrice": 5.99,
    //     "avalaiblekilos": 20,
    //     "tripsStatus": "RESERVATION",
    //     "images": ["http://localhost:3000/uploads/1650932732915buildings-7109918_640.jpg"],
    //     "__v": 0,
    //     "request": { "type": "GET", "url": "http://localhost:3000/trips/62673bfcbcc7c024334906d5" }
    //   }, {
    //     "reservations": [],
    //     "_id": "62673d31457e7a2680fcae4b",
    //     "description": " au Mali  disponible dimanche soir pour recupérer vos colis.",
    //     "cityFrom": "Saragosse", "cityTo": "Bamako",
    //     "departureDate": "2022-05-11T22:00:00.000Z",
    //     "arrivaldate": "2022-05-13T22:00:00.000Z", "kiloPrice": 5.99,
    //     "avalaiblekilos": 20, "tripsStatus": "RESERVATION",
    //     "images": ["http://localhost:3000/uploads/1650932732915buildings-7109918_640.jpg"], "__v": 0, "request": { "type": "GET", "url": "http://localhost:3000/trips/62673d31457e7a2680fcae4b" }
    //   }, {
    //     "reservations": [],
    //     "_id": "6267dd23575a7352a8d9ae6e",
    //     "description": "virée en Amoureux", "cityFrom": "Berlin", "cityTo": "Amsterdam",
    //     "departureDate": "2022-05-11T22:00:00.000Z",
    //     "arrivaldate": "2022-05-13T22:00:00.000Z", "kiloPrice": 15.99,
    //     "avalaiblekilos": 20, "tripsStatus": "RESERVATION", "images": ["http://localhost:3000/uploads/1650932732915buildings-7109918_640.jpg"],
    //     "__v": 0, "request": {
    //       "type": "GET",
    //       "url": "http://localhost:3000/trips/6267dd23575a7352a8d9ae6e"
    //     }
    //   }, {
    //     "reservations": [],
    //     "_id": "6267e0cc8dcd794294b34fd0",
    //     "description": "Camion Vide",
    //     "cityFrom": "Norvège", "cityTo": "Nice", "departureDate": "2022-05-11T22:00:00.000Z", "arrivaldate": "2022-05-13T22:00:00.000Z", "kiloPrice": 15.99, "avalaiblekilos": 20, "tripsStatus": "RESERVATION", "images": ["http://localhost:3000/uploads/1650974924344WhatsApp_Image_2021-02-15_at_23.41.49.jpeg"], "__v": 0, "request": { "type": "GET", "url": "http://localhost:3000/trips/6267e0cc8dcd794294b34fd0" }
    //   }]
    // })
  }, [])

  return (
    <Provider store={store}  >

      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Route exact path='/' component={HomeStore} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>

    </Provider>

  );
}

export default App;
