import { combineReducers } from 'redux'
import {productsReducer} from './products'
import {productReducer} from './products'
import * as productObject from './products'
import cartReducer, * as cartObject from './cart'

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  cart : cartReducer
})

const getAddedIds = state => cartObject.getAddedIds(state.cart)
const getQuantity = (state, id) => cartObject.getQuantity(state.cart, id)
const getProduct = (state, id) => productObject.getProduct(state.products, id)

export const getTotal = state => 
	getAddedIds(state)
	    .reduce((total, id) =>
	      total + getProduct(state, id).price * getQuantity(state, id),
	      0
	    )
    	.toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
/*	*/