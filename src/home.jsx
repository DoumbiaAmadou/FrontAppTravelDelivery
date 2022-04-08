import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center"> trajets dispoible dans les jours à venir  </h4>
        <p />
          <ul className="collection">
            <li className="collection-item avatar">
              <a href="#!">
                <i className="material-icons">directions_transit</i>
                Paris
                <i className="material-icons">send</i>  New York <span>  _____  </span> 22/10/2021   _____  22H </a></li>
            <li href="#!" className="collection-item avatar">
              <a href="#!"> <i className="material-icons">directions_transit</i> Paris  
              <i className="material-icons">send</i>  New York 
              <span>  _____  </span> 22/10/2021 22H </a></li>
            <li href="#!" className="collection-item avatar">
              <a href="#!"> <i className="material-icons">directions_transit</i> Paris  
              <i className="material-icons">send</i>  New York 
              <span>  _____  </span> 22/10/2021  22H </a></li>

          </ul>
      </div>
    </div>
  )
}

export default Home;
