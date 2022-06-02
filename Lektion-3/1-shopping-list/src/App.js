import { useState } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import AddItemForm from './components/AddItemForm';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';

const App = () => {

  const [items, setItems] = useState([
    {
      id: uuidv4(),
      product: 'Milk',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'Bread',
      completed: true
    },
    {
      id: uuidv4(),
      product: 'Butter',
      completed: false
    },
  ])

  const addItem = product => {
    setItems(state => {
      return [{ id: uuidv4(), product, completed: false }, ...state]
    })
  }

  const toggleComplete = item => {
    // const newItems = items.map(_item => {
    //   if(_item.id === item.id) {
    //     _item.completed = !_item.completed
    //     return _item
    //   }
    //   return _item
    // })


    // setItems(newItems)

    item.completed = !item.completed
    setItems(state => {
      state.sort((a, b) => a.completed - b.completed)
      return [...state]
    })
  }

  return (
    <div className='App container'>
      <Header title="Shopping List" />
      <ShoppingList items={items} toggleComplete={toggleComplete} />
      <AddItemForm addItem={addItem} />
    </div>
  )
}

export default App
