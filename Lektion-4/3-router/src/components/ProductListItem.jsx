import React from 'react'
import { Link } from 'react-router-dom'

const ProductListItem = ({product}) => {
  return (
    <Link to={`/products/${product.id}`} className='product-item'>
      <h2>{product.name}</h2>
      <p>{product.desc.slice(0,50)}...</p>
      <p className='red'>{product.price}</p>
    </Link>
  )
}

export default ProductListItem