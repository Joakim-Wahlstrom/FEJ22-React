import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeOne, removeProduct } from '../../store/actions/shoppingCartActions'

const CartProduct = ({item}) => {

  const dispatch = useDispatch()

  const add = e => {
    e.stopPropagation()
    dispatch(addToCart(item))
  }

  const remove = e => {
    e.stopPropagation()
    dispatch(removeOne(item._id))
  }

  const del = e => {
    e.stopPropagation()
    dispatch(removeProduct(item._id))
  }

  return (
    <div className='d-flex justify-content-between align-items-center p-2'>
      <div className='d-flex align-items-center'>
        <img src={item.image} className="img-fluid cart-image" alt={item.name} />
        <div>
          <div><strong>{item.name}</strong></div>
          <small>{item.quantity} x {item.price}</small>
        </div>
      </div>
      <div>
        <div className="btn-group me-1">
          <button className='btn btn-dark btn-sm' onClick={remove}>-</button>
          <button className='btn btn-dark btn-sm' onClick={add}>+</button>
        </div>
        <button className='btn btn-danger btn-sm px-2' onClick={del}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default CartProduct