
import CustomerRow from './CustomerRow'

const CustomerList = ({ customers }) => {



  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        
        {
          customers.map(customer => <CustomerRow key={customer.id} customer={customer} />)
        }

      </tbody>
    </table>
  )
}

export default CustomerList