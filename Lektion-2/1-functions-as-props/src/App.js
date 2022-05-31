import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerList from './components/CustomerList';


const App = () => {

  const [customers, setCustomers] = useState([
    { id: 'l12kjnfokjnzsld', name: 'Joakim' },
    { id: 'l12sdfgfdgdfhdf', name: 'Hans' },
  ])

  const addCustomer = (customerName) => {
    const customer = {
      id: Date.now().toString(),
      name: customerName
    }
    setCustomers(oldCustomers => {
      return [...oldCustomers, customer]
    })
  }

  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} />
      </div>
    </div>
  )
}

export default App