import { useState, useRef } from 'react'

const AddCustomerForm = ({ addCustomer }) => {

  // const [customerName, setCustomerName] = useState('')

  const customerName = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    // if(customerName.trim() === "") return

    addCustomer(customerName.current.value)
    // setCustomerName('')

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <h2>Add Customer</h2>
      </div>
      <div className='input-group'>
        {/* <input type="text" placeholder='Enter customer name' className='form-control' value={customerName} onChange={e => setCustomerName(e.target.value)} /> */}
        <input type="text" placeholder='Enter customer name' ref={customerName} className='form-control' />
        <button className='btn btn-primary'>Add Customer</button>
      </div>
    </form>
  )
}

export default AddCustomerForm