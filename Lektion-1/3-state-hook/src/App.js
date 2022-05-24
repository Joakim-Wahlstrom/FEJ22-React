import { useState } from 'react'

const App = () => {

  // let counter = 0

  const [counter, setCounter] = useState(0)
  
  // console.log(counter)
  const increment = () => {
    setCounter(state => state + 1)
    // console.log('inne ' + counter)
  }

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default App