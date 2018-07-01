import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { 
  Route, BrowserRouter as Router 
} from 'react-router-dom'

import './App.css'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import store from './redux'
import Header from './Header'
import Home from './screens/Home'
import Admin from './screens/Admin'
import Restrito from './screens/Restrito'
import Login from './screens/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/restrito" component={Restrito} />
            <Route path="/login" component={Login} />
            <Header />
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App