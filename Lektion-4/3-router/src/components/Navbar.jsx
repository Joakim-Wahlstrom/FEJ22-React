import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <h1>LOGO</h1>
        <ul className="nav-links">
          <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
          <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
          <li><NavLink to="/products" className='nav-link'>Products</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar