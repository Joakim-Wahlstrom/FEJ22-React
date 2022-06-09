import { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext'
import { actiontypes } from '../reducers/actiontypes'

const Todo = ({todo}) => {

  // const { removeTodo, toggleComplete } = useContext(TodosContext)
  const { dispatch } = useContext(TodosContext)

  const toggleComplete = () => {
    todo.completed = !todo.completed
    dispatch({
      type: actiontypes.toggleComplete,
      payload: todo
    })
  }

  return (
    <div className='todo d-flex'>
      <p onClick={toggleComplete} className={`todo-title ${todo.completed && 'completed'}`}>{todo.title}</p>
      <button onClick={() => dispatch({
        type: actiontypes.deleteTodo,
        payload: todo.id
      })}>X</button>
    </div>
  )
}

export default Todo