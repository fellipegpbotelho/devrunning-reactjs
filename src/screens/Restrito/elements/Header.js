import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

import ActionCreators from '../../../redux/actionCreators'

const Header = props => {
  return (
    <Menu>
      <Menu.Item as={Link} to="/"><Image src={"/logo.png"} size="small"/></Menu.Item>
      <Menu.Item as={Link} to="/restrito">Home</Menu.Item>
      <Menu.Item as={Link} to="/restrito/runs">Corridas</Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text={props.auth.user.name}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/restrito/my-account">Minha Conta</Dropdown.Item>
            <Dropdown.Item as={Link} to="/restrito/change-pass">Alterar Senha</Dropdown.Item>
            <Dropdown.Item onClick={props.logout}>Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, passwd) => dispatch(ActionCreators.signInRequest(email, passwd)),
    logout: () => dispatch(ActionCreators.destroyAuthRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)