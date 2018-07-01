import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

import ActionCreator from '../redux/actionCreators'

class Login extends Component {
  
  state = {
    form: {
      email: '',
      passwd: '',
    }
  }

  handleChange = fieldName => event => {

    const { value } = event.target
    const form = {
      ...this.state.form,
    }

    form[fieldName] = value

    this.setState({ form })
  }

  handleLogin = () => {
    const { email, passwd } = this.state.form
    this.props.login(email, passwd)
  }

  render () {
    if (this.props.auth.isAuth) {
      if (this.props.auth.user.role === 'admin') {
        return <Redirect to="/admin" />
      }
      return <Redirect to="/restrito" />
    }

    return (
      <div>
        <h1>Entrar</h1>
        <Form>
          <Form.Field>
            <label>E-mail</label>
            <input type="text" value={this.state.form.email} onChange={this.handleChange('email')} />
          </Form.Field>
          <Form.Field>
            <label>Senha</label>
            <input type="password" value={this.state.form.passwd} onChange={this.handleChange('passwd')} />
          </Form.Field>
          
          <Button onClick={this.handleLogin}>Entrar</Button>
          {
            this.props.auth.error &&
            <p>Credenciais inválidas!</p>
          }
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, passwd) => dispatch(ActionCreator.signInRequest(email, passwd))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)