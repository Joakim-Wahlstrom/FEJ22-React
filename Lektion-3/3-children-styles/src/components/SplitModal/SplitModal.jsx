import React from 'react'
import './SplitModal.css'

const SplitModal = ({left, right, children}) => {
  return (
    <div className='modal-bg'>
      <div className="split">
        <div className="left">{left} {children}</div>
        <div className="right">{right}</div>
      </div>
    </div>
  )
}

export default SplitModal