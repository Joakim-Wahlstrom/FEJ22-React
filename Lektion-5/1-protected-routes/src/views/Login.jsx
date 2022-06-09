import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const Login = () => {
  const { login, isAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleClick = () => {
    login()
    // if(state) {
    //   navigate(state.from)
    // } else {
    //   navigate("/")
    // }
    // navigate(state?.from || "/")
  }

  useEffect(() => {
    if(isAuthenticated) {
      navigate(state?.from || "/")
    }
  }, [isAuthenticated, navigate, state?.from])
  
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login