import { useState, useRef } from 'react'

const AddItemForm = ({ addItem }) => {
  const [productTitle, setProductTitle] = useState('')
  const [error, setError] = useState(false)

  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    inputRef.current.focus()
    if(productTitle.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    addItem(productTitle)
    setProductTitle('')
  }

  return (
    <>
    <form className='AddItemForm' onSubmit={handleSubmit}>
      <input type="text" value={productTitle} ref={inputRef} onChange={e => setProductTitle(e.target.value)} />
      <button>ADD</button>
    </form>
    {error && <p className='error'>You need to enter something</p>}
    </>
  )
}

export default AddItemForm