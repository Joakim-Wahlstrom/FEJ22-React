import actiontypes from "../actiontypes"


const initState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0
}

const shoppingCartReducer = (state = initState, action) => {
  // let itemRef;
  switch(action.type) {
    case actiontypes.shoppingCart.add:{

      const itemRef = state.cart.find(item => item._id === action.payload._id)

      const cartItem = {
        ...action.payload,
        quantity: 1
      }

      itemRef
      ? itemRef.quantity += 1
      : state.cart = [...state.cart, cartItem]
      
      return {
        ...state
      }
}
    case actiontypes.shoppingCart.decrementOne:{

      const itemRef = state.cart.find(item => item._id === action.payload)

      itemRef.quantity -= 1

      return {
        ...state
      }
}
    default:
      return state
  }
}


export default shoppingCartReducer