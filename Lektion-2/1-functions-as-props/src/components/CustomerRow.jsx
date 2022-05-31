import React from 'react'

const CustomerRow = ({ customer }) => {
  return (
    <tr>
      <th>{customer.id}</th>
      <td>{customer.name}</td>
      <td>
        <button className='btn btn-danger btn-sm'>Remove Customer</button>
      </td>
    </tr>
  )
}

export default CustomerRow