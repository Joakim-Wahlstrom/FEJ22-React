import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Admin from './views/Admin'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title="Protected Routes" />

      <div className="container">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/admin' element={ <Admin /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App