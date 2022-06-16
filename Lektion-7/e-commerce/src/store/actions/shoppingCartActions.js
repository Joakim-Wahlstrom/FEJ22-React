import actiontypes from '../actiontypes'

export const addToCart = product => {
  return {
    type: actiontypes.shoppingCart.add,
    payload: product
  }
}

export const removeOne = id => {
  return {
    type: actiontypes.shoppingCart.decrementOne,
    payload: id
  }
}