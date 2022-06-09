import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Admin from './views/Admin'
import Navbar from './components/Navbar'
// import { useAuthContext } from './hooks/useAuthContext'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {

  // const { isAuthenticated } = useAuthContext()
  return (
    <div>
      <Navbar title="Protected Routes" />

      <div className="container">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          {/* <Route path='/admin' element={ <Admin /> } /> */}
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App