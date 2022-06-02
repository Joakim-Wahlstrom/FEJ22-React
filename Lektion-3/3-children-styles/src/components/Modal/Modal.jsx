import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({children, handleClose, sales}) => {
  return ReactDOM.createPortal((
    <div className='modal-bg'>
      <div className="modal" style={{
        border: '4px solid',
        borderColor: sales ? 'red' : '#555',
        textAlign: 'center'
      }}>
        {children}
        <button onClick={handleClose} className={sales && 'sales-btn'}>Close</button>
      </div>
    </div>
  ), document.querySelector('#modals'))
}

export default Modal