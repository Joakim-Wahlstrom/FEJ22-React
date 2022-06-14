import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

  const counter = useSelector(state => state)

  return (
    <div>
      <h3>COUNTER</h3>
      <p>Counter is = {counter}</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default Counter