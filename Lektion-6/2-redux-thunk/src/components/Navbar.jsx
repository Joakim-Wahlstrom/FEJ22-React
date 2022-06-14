import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/" className='navbar-brand'>LOGO</Link>
        <ul className='nav-links'>
          <li><NavLink className={({isActive}) => isActive ? 'active-link nav-link' : 'nav-link'} to="/">Posts</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-link nav-link' : 'nav-link'} to="/create">Create</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar