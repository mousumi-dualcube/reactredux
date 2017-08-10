import * as actionTypes from '../constants/ActionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products
  }
}

export const getAllProducts = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

const addToCartUnsafe = productId => {
  return {
    type: actionTypes.ADD_TO_CART,
    productId
  }
}

export const addToCart = productId => {
  return (dispatch) => {
    dispatch(addToCartUnsafe(productId))
  }
}


export const fetchProductByIdSuccess = (product) => {
  return {
    type: actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
    product
  }
};

export const fetchProducts = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};