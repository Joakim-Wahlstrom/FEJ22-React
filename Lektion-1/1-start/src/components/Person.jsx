import React from 'react'

const Person = ({name, age}) => {

  // console.log(props)

  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <p>age: {age}</p>
    </div>
  )
}

export default Person