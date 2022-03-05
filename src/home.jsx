import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center"> trajets dispoible dans les jours à venir  </h4>
        <p>
          <ul class="collection">
            <li class="collection-item avatar">
              <a href="#!">
                <i class="material-icons">directions_transit</i>
                Paris
                <i class="material-icons">send</i>  New York <span>  _____  </span> 22/10/2021   _____  22H </a></li>
            <li href="#!" class="collection-item avatar"><a href="#!"> <i class="material-icons">directions_transit</i> Paris  <i class="material-icons">send</i>  New York <span>  _____  </span> 22/10/2021 22H </a></li>
            <li href="#!" class="collection-item avatar"><a href="#!"> <i class="material-icons">directions_transit</i> Paris  <i class="material-icons">send</i>  New York <span>  _____  </span> 22/10/2021  22H </a></li>

          </ul>
        </p>

      </div>
    </div>
  )
}

export default Home;
