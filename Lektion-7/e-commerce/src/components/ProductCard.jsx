import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name}/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.short}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <button className='btn btn-info'>Add To Cart</button>
            <p className='text-danger h5'>{product.price} :-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard