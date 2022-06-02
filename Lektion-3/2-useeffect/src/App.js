import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css';

const App = () => {

  const [showTodos, setShowTodos] = useState(true)

  return (
    <div>
      <button className="btn" onClick={() => setShowTodos(false)}>Hide todos</button>
      {showTodos && <TodoList />}
    </div>
  )
}

export default App