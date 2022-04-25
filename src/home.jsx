import React from 'react';
import { useState } from 'react';

const Home = () => {

  const [travelList] = useState([{
    id: 1,
    picture: '', author: 'Bobacar',
    image: 'https://avatars.githubusercontent.com/u/7091807?s=400&u=eb676234cb0a8decf1267dd0819186a1e1457044&v=4',
    from: 'Paris', to: 'New York',
    dateDepart: '22/10/2021', heureDepart: '08h',
    datelivraison: '23/10/2021', heureLivraison: '15h',
    kilos: 20,
    use: 10, kiloByTrip: 1
  },
  {
    id: 2,
    picture: '', author: 'Bobacar',
    image: 'https://avatars.githubusercontent.com/u/7091807?s=400&u=eb676234cb0a8decf1267dd0819186a1e1457044&v=4',
    from: 'Marseille', to: 'Le Havre', dateDepart: '22/10/2021', heureDepart: '08h',
    datelivraison: '23/10/2021', heureLivraison: '15h', kilos: 20, use: 10, kiloByTrip: 1
  },
  {
    id: 3,
    picture: '', author: 'Bobacar', image: 'https://avatars.githubusercontent.com/u/7091807?s=400&u=eb676234cb0a8decf1267dd0819186a1e1457044&v=4',
    from: 'Bamako', to: 'Atlanta', dateDepart: '22/10/2021', heureDepart: '08h',
    datelivraison: '23/10/2021', heureLivraison: '15h', kilos: 20, use: 10, kiloByTrip: 1
  }
  ])

  return (
    <div>
      <div className="container">
        <h4 className="center"> trajets disponibles </h4>
        <p />
        <ul className="collection">
          {travelList.map((element) => (

            <li key={element.id} className="collection-item avatar">
              <a href="#!">
                <span className="material-icons large">
                  luggage
                </span>
                <span className="kilo">
                  {element.kilos - element.use}  Kg  (dispo)
                </span>
                <br />
                <h3 className='city'>

                  {element.from}&nbsp;
                  <span className="material-icons">
                    flight_takeoff flight_land
                  </span>&nbsp;


                  {element.to}

                  <form action="" className='needs' >
                    <input type="text" className="needKilos" placeholder=" entrez ici le nombre de kilos" name="" id="" />
                  </form>

                </h3>
                {element.dateDepart}  à  {element.heureDepart} &nbsp;&nbsp; &nbsp;&nbsp;
                colis dispo au:  {element.datelivraison}  à  {element.heureLivraison} &nbsp;&nbsp;
              </a>
              <div className='regregre'>
                <img alt="" className="circle  responsive-img" src={element.image} />
              </div>


            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home;
