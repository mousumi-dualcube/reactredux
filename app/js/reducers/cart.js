import { ADD_TO_CART} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}
const addedIds = (state = initialState.addedIds, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...state, action.productId]
		default:
		return state
	}
}
const quantityById = (state = initialState.quantityById, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {...state, 
        		[action.productId]: (state[action.productId] || 0) + 1}
		default:
		return state
	}
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds


const cartReducer = (state = [], action) => {
	switch (action.type) {
	    case 'ADD_TO_CART':
	      return {
	      	addedIds: addedIds(state.addedIds, action),
        	quantityById: quantityById(state.quantityById, action)
	      }
	    default:
	      return state
	}
}
export default cartReducer