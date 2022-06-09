import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setTimeout(() => {
      setIsAuthenticated(true)
    }, 1000)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider