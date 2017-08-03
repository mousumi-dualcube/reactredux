import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Layout from './pages/layout'
import Home from './pages/home'
import Shop from './pages/shop'
import Product from './pages/product'
import Cart from './pages/cart'
import Checkout from './pages/checkout'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
    	<IndexRoute component={Home} />
      	<Route path='shop' component={Shop} />
      	<Route path='product' component={Product} />
      	<Route path='cart' component={Cart} />
      	<Route path='checkout' component={Checkout} />
    </Route>
  </Router>
);

export default routes