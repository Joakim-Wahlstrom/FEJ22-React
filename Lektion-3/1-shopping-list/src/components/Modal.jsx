import React from 'react'

const Modal = ({ clearList, setShowModal }) => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <h2>Warning</h2>
        <p>are you sure you want to remove all the items?</p>
        <div className="modal_flex">
          <button onClick={() => clearList()} className='y-btn'>Yes</button>
          <button onClick={() => setShowModal(false)} className='n-btn'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Modal