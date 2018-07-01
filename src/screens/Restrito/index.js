import React from 'react'
import { Redirect, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './elements/Header'

import Home from './Home'
import Runs from './Runs'

const Restrito = props => {

  if (!props.auth.isAuth) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header />
      <Route path={`${props.match.path}/`} component={Home} exact />
      <Route path={`${props.match.path}/runs`} component={Runs} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Restrito)