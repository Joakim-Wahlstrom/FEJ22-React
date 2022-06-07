import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div>
      <h2>404 not found</h2>
      <button onClick={handleClick}>Go home</button>
      
    </div>
  )
}

export default NotFound