import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="logo"
          href="/about"> Export Solutions </a>
        <ul className="right">

          <li><Link to={'/'}> les trajets </Link> </li>
          <li><Link to={'/profile'}> Profil </Link></li>
          <li><Link to={'/about'}> About </Link></li>
          <li><Link to={'/contact'}> Contact </Link></li>
        </ul></div>
    </nav>
  )
}
export default NavBar;