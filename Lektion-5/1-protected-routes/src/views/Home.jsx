import {useContext} from 'react'
import Todo from '../components/Todo'
import { TodosContext } from '../contexts/TodosContext'

const Home = () => {

  const { todos } = useContext(TodosContext)

  return (
    <div className='todos'>
      {
        todos.length ? todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))
        : <h2>Not todos left</h2>
      }
    </div>
  )
}

export default Home