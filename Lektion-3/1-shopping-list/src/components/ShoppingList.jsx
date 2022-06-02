import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ items, toggleComplete, removeItem, changeItem }) => {
  return (
    <div className='ShoppingList'>
      {
        items &&
        items.map(item => (
          <ListItem key={item.id} item={item} toggleComplete={toggleComplete} removeItem={removeItem} changeItem={changeItem} />
        ))
      }
    </div>
  )
}

export default ShoppingList