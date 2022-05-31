import { useState } from 'react'
import './App.css';

const App = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })
  const [hasErrors, setHasErrors] = useState(false)

  const handleChange = e => {
    setFormData(state => {
      return { ...state,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(formData.password !== formData.repeatPassword) {
      console.log('the passwords need to match')
      setHasErrors(true)
      return 
    }
    setHasErrors(false)
    console.log(formData)
  }

  return (
    <div className="container mt-5">
      <form className='card' onSubmit={handleSubmit}>
        <h2 className='text-center p-2 border-bottom'>Register</h2>
        <div className="p-3">

          <div className="row mb-3">
            <div className="col">
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id='firstName' className='form-control' name='firstName' value={formData.firstName} onChange={handleChange} />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id='lastName' className='form-control' name='lastName' value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' className='form-control' name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className="row mb-3">
            <div className="col">
              <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id='password' className='form-control' name='password' value={formData.password} onChange={handleChange} />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="repeatPassword">Repeat Password:</label>
                <input type="text" id='repeatPassword' className='form-control' name='repeatPassword' value={formData.repeatPassword} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div>
            {hasErrors && <p className="text-danger text-center">You need to fill out the form correctly</p>}
          </div>
          <button className='btn btn-dark w-100 mt-3 mb-4'>Register</button>

        </div>
      </form>
    </div>
  )
}

export default App