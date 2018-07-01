import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = props => <h1>Home do admin</h1>
const Users = props => <h1>Users admin</h1>

const Admin = props => {
  
  if (!props.auth.isAuth) {
    return <Redirect to="/login" />
  }

  if (props.auth.user.role !== 'admin') {
    return <Redirect to="/restrito" />
  }

  return (
    <div>
      <h1>Admin</h1>
      <p>
        {JSON.stringify(props.auth)}
        <Link to="/admin">Home do admin</Link>
        <Link to="/admin/users">Admin users</Link>
      </p>
      <div>
        <Route path={`${props.match.path}/`} component={Home} exact />
        <Route path={`${props.match.path}/users`} component={Users} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Admin)