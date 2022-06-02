import { useState, useRef, useEffect } from 'react'

const ChangeItem = ({ item, changeText }) => {

  const [text, setText] = useState(item.product)
  const input = useRef() 

  useEffect(() => {
    // setText(item.product)
    input.current.focus()
  }, [])

  const handleSub = e => {
    e.preventDefault()
    changeText(text)
  }

  return (
    <form className="ChangeItem" onSubmit={handleSub}>
      <input type="text" ref={input} value={text} onChange={e => setText(e.target.value)} />
      <button className='btn btn-check'><i className="fa-solid fa-check"></i></button>
    </form>
  )
}

export default ChangeItem