import actiontypes from "../actiontypes";
import axios from 'axios'

export const getProductCatalog = () => {
  return async (dispatch) => {
    dispatch({ type: actiontypes.productCatalog.getProducts })
    try {
      
      const {status, data} = await axios.get('http://localhost:9999/api/products')
      if(status === 200) {
        dispatch(getProductCatalogSuccess(data))
      } else {
        throw new Error('could not get the data')
      }

    } catch (err) {
      dispatch(getProductCatalogFailure(err.message))
    }

  }
}


const getProductCatalogSuccess = (products) => {
  return {
    type: actiontypes.productCatalog.getProductsSuccess,
    payload: products
  }
}
const getProductCatalogFailure = (err) => {
  return {
    type: actiontypes.productCatalog.getProductsFailure,
    payload: err
  }
}