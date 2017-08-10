import { combineReducers } from 'redux'
import { CREATE_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_BY_ID_SUCCESS } from '../constants/ActionTypes'

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.product)
        ];
    case 'FETCH_PRODUCTS_SUCCESS':
          return action.products;
    default:
          return state;
  }
}

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_BY_ID_SUCCESS':
      return action.product;
    default:
      return state;
  }
}

export const getProduct = (state, id) => {
  return state.find((state) => { 
    return state.id === id;
  })
}