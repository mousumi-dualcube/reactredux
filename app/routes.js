import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './app'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}></Route>
  </Router>
);

export default routes