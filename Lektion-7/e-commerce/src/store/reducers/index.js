import { combineReducers } from "redux";
import productCatalogReducer from "./productCatalogReducer";
import shoppingCartReducer from "./shoppingCartReducer";


export default combineReducers({
  productCatalog: productCatalogReducer,
  shoppingCart: shoppingCartReducer
})