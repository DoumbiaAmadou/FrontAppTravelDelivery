import React from 'react'

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="logo"
          href="/about"> Export Solutions </a>
        <ul className="right">

          <li> <a href="/"> Annonces </a></li>
          <li> <a href="/myTrips"> My Trips </a></li>
          <li> <a href="/Profil"> Profil </a></li>
          <li> <a href="/about"> About </a></li>
          <li> <a href="/contact"> Contact </a></li>
        </ul> </div>
    </nav>
  )
}
export default NavBar;