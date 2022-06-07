import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Products from './Views/Products'
import NotFound from './Views/NotFound';
import ProductDetails from './Views/ProductDetails';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/products' element={ <Products />} />
          <Route path='/products/:id' element={ <ProductDetails />} />
          <Route path='*' element={ <NotFound />} />

          {/* <Route path='*' element={ 
            <div>
              <h2>404 den här sidan finns inte</h2>
            </div>
           } /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App