
import React from "react";
import App from "./App.js";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/app" component={App} />
    </Router>
  </Provider>
)

export default Root