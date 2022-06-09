import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const ProtectedRoute = ({children}) => {

  const { isAuthenticated } = useAuthContext()
  const location = useLocation()

  return isAuthenticated
  ? children
  : <Navigate to="/login" replace state={{ from: location.pathname }} />
}

export default ProtectedRoute