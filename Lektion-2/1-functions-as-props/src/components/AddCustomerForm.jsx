import { useState } from 'react'

const AddCustomerForm = ({ addCustomer }) => {

  const [customerName, setCustomerName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <h2>Add Customer</h2>
      </div>
      <div className='input-group'>
        <input type="text" placeholder='Enter customer name' className='form-control' value={customerName} />
        <button className='btn btn-primary'>Add Customer</button>
      </div>
    </form>
  )
}

export default AddCustomerForm