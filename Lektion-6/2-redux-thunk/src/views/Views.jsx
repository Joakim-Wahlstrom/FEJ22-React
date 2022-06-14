import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create'
import PostDetails from './PostDetails'
import Posts from './Posts'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/create' element={<Create />} />
      <Route path='/posts/:id' element={<PostDetails />} />
    </Routes>
  )
}

export default Views