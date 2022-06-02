import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem';

  // const getTodos = async (url) => {
  //   const res = await axios.get(url)
  //   console.log(res.data)
  //   return res.data
  // }

const TodoList = () => {
  
  const [todos, setTodos] = useState([])
  const [url, setUrl] = useState('http://localhost:8080/todos')

  // const getTodos = async () => {
  //   const res = await axios.get(url)
  //   console.log(res.data)
  //   setTodos(res.data)
  // }

  const getTodos = useCallback(async () => {
    const res = await axios.get(url)
    console.log(res.data)
    setTodos(res.data)
  }, [url])
    
  useEffect(() => {
  //   // axios.get(url)
  //   // .then(res => {
  //   //   console.log(res.data)
  //   //   setTodos(res.data)
  //   // })
  //   // getTodos(url).then(setTodos)
    getTodos()
  }, [getTodos])

  // useEffect(() => {
  //   const getTodos = async () => {
  //     const res = await axios.get(url)
  //     console.log(res.data)
  //     setTodos(res.data)
  //   }
  //   getTodos()

  // }, [url])

  // componentDidMount
  useEffect(() => {}, [])

  //componentDidUpdate
  useEffect(() => {}, [todos])

  //component Destroyed
  useEffect(() => {
    return () => {
      //cleanup
      console.log('component unmounted')
    }
  }, [])
  

  return (
    <div className='todo-list container'>
      { todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))

      }

      <button className='btn' onClick={() => setUrl('http://localhost:8080/todos')}>All users</button>
      <button className='btn' onClick={() => setUrl('http://localhost:8080/todos?user=1')}>user 1</button>
    </div>
  )
}

export default TodoList