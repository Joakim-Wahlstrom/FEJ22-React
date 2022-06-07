import React from 'react'
import { Link } from 'react-router-dom'

const ProductListItem = ({product}) => {
  return (
    <Link to="/" className='product-item'>
      <h2>{product.name}</h2>
      <p>{product.desc.slice(0,50)}...</p>
      <p>{product.price}</p>
    </Link>
  )
}

export default ProductListItem