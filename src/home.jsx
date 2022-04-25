import React from 'react';
import { useState } from 'react';

const Home = () => {

  const [travelList] = useState([{
    picture: '', author: 'Bobacar',
    image: 'https://avatars.githubusercontent.com/u/7091807?s=400&u=eb676234cb0a8decf1267dd0819186a1e1457044&v=4',
    from: 'Paris', to: 'New York',
    dateDepart: '22/10/2021', heureDepart: '08h', 
    datelivraison: '23/10/2021', heureLivraison: '15h',
    kilos: 20,
    use: 10, kiloByTrip: 1
  },
  {
    picture: '', author: 'Bobacar',
    image: 'https://avatars.githubusercontent.com/u/7091807?s=400&u=eb676234cb0a8decf1267dd0819186a1e1457044&v=4',
    from: 'Marseille', to: 'Le Havre',     dateDepart: '22/10/2021', heureDepart: '08h', 
    datelivraison: '23/10/2021', heureLivraison: '15h', kilos: 20, use: 10, kiloByTrip: 1
  },
  {
    picture: '', author: 'Bobacar', image: 'https://avatars.githubusercontent.com/u/7091807?s=400&u=eb676234cb0a8decf1267dd0819186a1e1457044&v=4',
    from: 'Bamako', to: 'Atlanta',     dateDepart: '22/10/2021', heureDepart: '08h', 
    datelivraison: '23/10/2021', heureLivraison: '15h', kilos: 20, use: 10, kiloByTrip: 1
  }
  ])

  return (
    <div>
      <div className="container">
        <h4 className="center"> trajets de kilos </h4>
        <p />
        <ul className="collection">
          {travelList.map((element, index) => (

            <li key={index} className="collection-item avatar">
              <a href="#!">
                <span className="material-icons">
                  luggage
                </span>

                {element.kilos - element.use}
                Kg  (dispo)
                &nbsp;&nbsp;
                <span className="material-icons">
                  villa
                </span>
                {element.from}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-icons">
                  flight_takeoff  flight_land
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-icons">
                  villa
                </span>
                {element.to}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {element.dateDepart}  à  {element.heureDepart} &nbsp;&nbsp; &nbsp;&nbsp;
                 colis dispo au:  {element.datelivraison}  à  {element.heureLivraison} &nbsp;&nbsp;
                </a>
                <span>
                  <img className="circle regregre  responsive-img"
                    src={element.image} />
                </span>               
            </li>

          ))}
          {/*             
         <li href="#!" className="collection-item avatar">
            <a href="#!"> <i className="material-icons">directions_transit</i> Paris
              <i className="material-icons">send</i>  New York
              <span>  _____  </span> 22/10/2021 22H </a></li>
          <li href="#!" className="collection-item avatar">
            <a href="#!"> <i className="material-icons">directions_transit</i> Paris
              <i className="material-icons">send</i>  New York
              <span>  _____  </span> 22/10/2021  22H </a></li> */}


        </ul>
      </div>
    </div>
  )
}

export default Home;
