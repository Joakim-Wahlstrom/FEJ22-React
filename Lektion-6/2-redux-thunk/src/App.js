import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Views from './views/Views';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Views />
      </div>
    </div>
  )
}

export default App
