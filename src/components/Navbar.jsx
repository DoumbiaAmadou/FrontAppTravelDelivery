import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DISCONNECT_USER } from '../reducers/authReducer';

const NavBar = ({ auth, cart, disconnect }) => {
  // let history = useHistory();
  console.log('amad ', cart.length);

  return (
    <>
      <div className="container-lg ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <Link className="navbar-brand ml-1 mr-auto" to={"/"}> Export Solutions </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-1 ml-auto">
              {(!auth || !auth.isConnected) &&
                <React.Fragment>
                  <li className="nav-item" ><Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/signUp'}> Sign in </Link> </li>
                  <li className="nav-item"><Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/login'}> login </Link> </li>
                </React.Fragment>
              }
              {(auth?.isConnected && auth.user?.firstName) &&
                <li className="nav-item">
                  <i id='colorGrey' className='nav-link'> Bienvenue {auth.user.firstName}!
                  </i>
                </li>
              }
              <li className="nav-item"><Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/'}> les trajets </Link> </li>
              <li className="nav-item"><Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/profile'}> Profil </Link></li>
              <li className="nav-item"><Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/about'}> About </Link></li>
              <li className="nav-item"><Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/contact'}> Contact </Link></li>
              <li className="nav-item  position-relative">
                <Link data-toggle="collapse" data-target=".navbar-collapse.show" to={'/cart'}>

                  <i className='material-icons '> add_shopping_cart</i>
                  {cart.length > 0 && <span className='cartIndicator'>{cart.length}</span>}
                </Link>
              </li>

              {(auth && auth.isConnected) &&
                <li className=" nav-item"><Link className='btn-outline-success ' data-toggle="collapse" data-target=".navbar-collapse.show" onClick={disconnect} > Se deconnecter! </Link> </li>
              }
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}


export default connect((state) => ({
  auth: state.auth,
  cart: state.cart
}),
  (dispatch) => ({
    disconnect: () => { dispatch({ type: DISCONNECT_USER }) }
  })
)(NavBar);