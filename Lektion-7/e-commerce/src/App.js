import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Checkout from './views/Checkout';
import Home from './views/Home';
import Products from './views/Products';

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/products' element={ <Products /> } />
          <Route path='/checkout' element={ <Checkout /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
