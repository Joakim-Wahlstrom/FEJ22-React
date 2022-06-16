import React from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {

  const emptyCart = (
    <div className='p-2 text-center'>
      Your cart is empty
    </div>
  )

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)

  return (
    <div>
      {
        cart.map(product => (
          <CartProduct key={product._id} item={product} />
        ))
      }

      {!cart.length && emptyCart}

      <div className="dropdown-divider"></div>

      <div className='d-flex justify-content-between align-items-center p-2'>
        <div>
          <div>Total Price: {totalAmount}</div>
          <small className='text-muted'>ink. vat</small>
        </div>
        <div>
          <Link to="/checkout" className='btn btn-info'>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart