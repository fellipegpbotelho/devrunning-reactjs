import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ActionCreators from './redux/actionCreators'
import logo from './logo.svg'

const Header = props => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <p>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/restrito">Restrito</Link>
        <Link to="/login">Login</Link>
      </p>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, passwd) => ActionCreators.signInRequest(email, passwd)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)