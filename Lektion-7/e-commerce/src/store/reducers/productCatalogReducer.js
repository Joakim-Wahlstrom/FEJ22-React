import actiontypes from "../actiontypes";

const initState = {
  products: [],
  loading: false,
  error: null
}

const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes.productCatalog.getProducts:
      return {
        ...state,
        loading: true,
        error: null
      }

    case actiontypes.productCatalog.getProductsSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }

    case actiontypes.productCatalog.getProductsFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default productCatalogReducer;