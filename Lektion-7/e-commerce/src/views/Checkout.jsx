import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/ShoppingCart/CartProduct'

const Checkout = () => {

  const { cart } = useSelector(state => state.shoppingCart)

  return (
    <div>
      <h2 className='text-center mb-3'>Checkout</h2>

      <div className="d-flex justify-content-between">
        <div className='checkout_cart'>
          {cart.map(product =>(
            <div className='border-bottom' key={product._id}>
              <CartProduct item={product} />
            </div>
          ))}
        </div>
        <div className="border">
          totalsumma: 
          fraktkostnad
        </div>
      </div>
    </div>
  )
}

export default Checkout