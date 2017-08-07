import * as actionTypes from '../constants/ActionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';


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

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products
  }
};