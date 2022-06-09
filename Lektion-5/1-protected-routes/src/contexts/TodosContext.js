import { createContext, useState, useReducer } from 'react'
import { TodosReducer } from '../reducers/todosReducer'

export const TodosContext = createContext()

const TodosContextProvider = (props) => {

  const [todos, dispatch] = useReducer(TodosReducer, [
    {
      id: '12435t',
      title: 'Todo 1',
      completed: false
    },
    {
      id: '1asfdgt',
      title: 'Todo 2',
      completed: true
    },
    {
      id: 'asfdgb',
      title: 'Todo 3',
      completed: false
    }
  ])

  // const [todos, setTodos] = useState([
  //   {
  //     id: '12435t',
  //     title: 'Todo 1',
  //     completed: false
  //   },
  //   {
  //     id: '1asfdgt',
  //     title: 'Todo 2',
  //     completed: true
  //   },
  //   {
  //     id: 'asfdgb',
  //     title: 'Todo 3',
  //     completed: false
  //   },
  // ])

  // const addTodo = (title) => {
  //   setTodos(state => [...state, { id: Date.now().toString(), title, completed: false }])
  // }

  // const removeTodo = (id) => {
  //   setTodos(state => state.filter(todo => todo.id !== id))
  // }

  // const toggleComplete = todo => {
  //   todo.completed = !todo.completed
  //   setTodos(state => {
  //     return [...state]
  //   })
  // }

  return (
    // <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleComplete }}>
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider