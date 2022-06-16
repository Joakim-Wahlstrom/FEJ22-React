const actiontypes = {
  productCatalog: {
    getProducts: 'GET_PRODUCTS',
    getProductsSuccess: 'GET_PRODUCTS_SUCCESS',
    getProductsFailure: 'GET_PRODUCTS_FAILURE'
  },
  shoppingCart: {
    add: 'ADD_TO_CART',
    decrementOne: 'DECREMENT_ITEM_FROM_CART',
    removeProduct: 'DELETE_PRODUCT_FROM_CART',
    clear: 'CLEAR_CART'
  }
}

export default actiontypes;