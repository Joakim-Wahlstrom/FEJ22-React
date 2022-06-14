import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })
  const navigate = useNavigate()

  const addPost = async () => {
    const res = await axios.post('http://localhost:8080/posts', formData)
    if(res.status === 201) {
      navigate("/")
    }
  }

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
     addPost()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='create-form'>
        <input className="form-control" name='title' type="text" placeholder='title' value={formData.title} onChange={onChange} />
        <textarea className="form-control" name='body' placeholder='content' cols="30" rows="10" value={formData.body} onChange={onChange}></textarea>
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Create