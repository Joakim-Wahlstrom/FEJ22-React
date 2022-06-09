import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <nav className='navbar'>
      <div className="container d-flex">
        <Link to="/"><h1>{title}</h1></Link>
        <ul className='d-flex'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar