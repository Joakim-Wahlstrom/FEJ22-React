import { useContext, useState } from 'react'
import { TodosContext } from '../contexts/TodosContext'
import { useNavigate } from 'react-router-dom'
import { actiontypes } from '../reducers/actiontypes'

const Admin = () => {

  // const { addTodo } = useContext(TodosContext)
  const { dispatch } = useContext(TodosContext)
  const [title, setTitle] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // addTodo(title)
    dispatch({
      type: actiontypes.addTodo,
      payload: title
    })
    navigate("/")
  }

  return (
    <div className='admin'>
      <h1>Admin</h1>
      <form onSubmit={handleSubmit} className="addTodoForm">
        <h2>Add todo</h2>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default Admin