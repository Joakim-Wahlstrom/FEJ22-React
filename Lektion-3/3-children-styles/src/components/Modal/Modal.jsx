import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <h2>Cookies</h2>
        <p>this site uses cookies, and the are wery tasty</p>
        <button>Close</button>
      </div>
    </div>
  )
}

export default Modal