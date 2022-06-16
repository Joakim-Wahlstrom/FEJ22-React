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

export const removeProduct = id => {
  return {
    type: actiontypes.shoppingCart.removeProduct,
    payload: id
  }
}