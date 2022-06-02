import React from 'react'

const ListItem = ({ item, toggleComplete }) => {
  return (
    <div className='ListItem'>
      <p onClick={() => toggleComplete(item)} className={`product-title ${item.completed && 'complete'}`}>{ item.product }</p>
      <div className="buttons">
        <button className="btn btn-change"><i className="fa-solid fa-pen"></i></button>
        <button className="btn btn-delete"><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem