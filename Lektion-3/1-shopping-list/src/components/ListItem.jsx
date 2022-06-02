import { useState } from 'react'
import ChangeItem from './ChangeItem'

const ListItem = ({ item, toggleComplete, removeItem, changeItem }) => {

  const [change, setChange] = useState(false)
  const toggleChange = () => {
    setChange(state => !state)
  }

  const changeText = (text) => {
    changeItem(item, text)
    setChange(false)
  }

  return (
    <div className='ListItem'>
      { change
        ? <ChangeItem item={item} changeText={changeText} />
        : <p onClick={() => toggleComplete(item)} className={`product-title ${item.completed && 'complete'}`}>{ item.product }</p>
      }
      <div className="buttons">
        <button onClick={toggleChange} className="btn btn-change"><i className="fa-solid fa-pen"></i></button>
        <button onClick={() => removeItem(item.id)} className="btn btn-delete"><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem