import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
     
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          
          <Link className='navbar-brand text-dark' to={'/'}> Export Solutions </Link>

          <ul className="nav nav-extended">

            <li className="nav-item"><Link className='nav-link' to={'/signUp'}> Sign in </Link> </li>
            <li className="nav-item"><Link className='nav-link' to={'/login'}> login </Link> </li>

            <li className="nav-item"><Link className='nav-link' to={'/'}> les trajets </Link> </li>
            <li className="nav-item"><Link className='nav-link' to={'/profile'}> Profil </Link></li>
            <li className="nav-item"><Link className='nav-link' to={'/about'}> About </Link></li>
            <li className="nav-item"><Link className='nav-link' to={'/contact'}> Contact </Link></li>
          </ul>
        </div>
      </nav>
  )
}
export default NavBar;