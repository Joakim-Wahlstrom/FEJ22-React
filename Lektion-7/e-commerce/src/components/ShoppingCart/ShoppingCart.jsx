import React from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'

const ShoppingCart = () => {

  const emptyCart = (
    <div className='p-2 text-center'>
      Your cart is empty
    </div>
  )

  return (
    <div>
      <CartProduct />

      {emptyCart}

      <div className="dropdown-divider"></div>

      <div className='d-flex justify-content-between align-items-center p-2'>
        <div>
          <div>Total Price: 0</div>
          <small className='text-muted'>ink. vat</small>
        </div>
        <div>
          <Link to="/cart" className='btn btn-info'>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart