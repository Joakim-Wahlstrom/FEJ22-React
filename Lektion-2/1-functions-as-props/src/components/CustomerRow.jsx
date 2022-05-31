import React from 'react'

const CustomerRow = ({ customer, removeCustomer }) => {
  return (
    <tr>
      <th>{customer.id}</th>
      <td>{customer.name}</td>
      <td>
        <button onClick={() => removeCustomer(customer.id)} className='btn btn-danger btn-sm'>Remove Customer</button>
      </td>
    </tr>
  )
}

export default CustomerRow