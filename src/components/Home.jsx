import moment from "moment";
import { connect } from 'react-redux';
import { ADD_TRIPS } from './../reducers/TripsReducer'

const Home = ({ travelList, onLoadAllTrips }) => {

  const items = (element) => (
    <li key={element._id} className="collection-item avatar ">
      <div>
        <div className="d-flex justify-content-center">
          <span className="material-icons large align-items-center">
            luggage
          </span>
          <span className="kilo">
            {element.avalaiblekilos && element.avalaiblekilos + ' Kg  (dispo)'}
          </span>

        </div>

        <div className="d-flex justify-content-center">

          <h6 className='city'><b>
            {element.cityFrom}&nbsp;
            <span className="material-icons">
              flight_takeoff flight_land
            </span>
            &nbsp;{element.cityTo}
          </b></h6>
        </div>
        <span> {element.description}</span>
        <br /><br />
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">

          <b>
            Depart le {moment(element.arrivaldate).format("DD-MM-YYYY")}   &nbsp;&nbsp; &nbsp;&nbsp;
            colis dispo au: {moment(element.heureLivraison).format("DD-MM-YYYY")} &nbsp;&nbsp;
          </b>
          <button type="button" className="btn btn-success">reserrvation de Kilos</button>
        </div>
      </div>

      <div className='regregre'>
        <img alt="" className="circle  responsive-img" src={element.images} />
      </div>
    </li>
  )

  return (
    <div>
      <div className="container">
        <h4 className="center"> trajets disponibles </h4>
        <p />
        <ul className="collection">
          {travelList.map(items)}
        </ul>
      </div>
    </div>
  )
}

const HomeStore = connect(
  (state) => ({
    travelList: state.allTrips

  }),
  (dispatch) => ({
    onLoadAllTrips: additionnalList => dispatch({
      type: ADD_TRIPS,
      payload: additionnalList
    })
  })
)(Home);


export default HomeStore;