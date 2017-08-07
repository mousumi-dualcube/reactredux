import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { getAllProducts } from './actions'
import thunk from 'redux-thunk'

const middleware = [ thunk ];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>, 
	document.getElementById('app')
)