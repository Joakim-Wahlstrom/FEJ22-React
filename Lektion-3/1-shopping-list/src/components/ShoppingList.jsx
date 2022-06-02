import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ items, toggleComplete }) => {
  return (
    <div className='ShoppingList'>
      {
        items &&
        items.map(item => (
          <ListItem key={item.id} item={item} toggleComplete={toggleComplete} />
        ))
      }
    </div>
  )
}

export default ShoppingList