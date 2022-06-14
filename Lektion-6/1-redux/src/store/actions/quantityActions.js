import actiontypes from "../actiontypes"

export const increment = (amount) => {
  return {
    type: actiontypes().quantity.increment,
    payload: amount
  }
}

export const decrement = (amount) => {
  return {
    type: actiontypes().quantity.decrement,
    amount
  }
}