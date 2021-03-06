import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Segment, Form } from 'semantic-ui-react'
import timezones from 'moment-timezone/data/meta/latest.json'

import ActionCreators from '../../redux/actionCreators'

class MyAccount extends Component {

  state = {
    unit: "",
    timezone: "",
  }

  componentDidMount () {
    const { auth } = this.props
    this.setState({
      unit: auth.user.unit,
      timezone: auth.user.timezone,
    })
    this.props.reset()
  }

  handleChange = fieldname => event => {
    this.setState({
      [fieldname]: event.target.value,
    })
  }

  handleSave = () => {
    this.props.save({
      unit: this.state.unit,
      timezone: this.state.timezone,
      id: this.props.auth.user.id,
    })
  }

  render () {
    return (
      <div>
        <h1>Minha Conta</h1>
        { this.props.auth.saved && <Segment color="green">Configurações alteradas com sucesso!</Segment> }
        { 
          !this.props.auth.saved &&  
            <Form>
              <Form.Field>
                <label>Unidade:</label>
                <select value={this.state.unit} onChange={this.handleChange("unit")}>
                  <option value="metric">Métrico (Km)</option>
                  <option value="imperial">Imperial (mi)</option>
                </select>
              </Form.Field>
              <Form.Field>
                <label>Timezone:</label>
                <select value={this.state.timezone} onChange={this.handleChange("timezone")}>
                  {
                    Object
                      .keys(timezones.zones)
                      .map(tz => {
                        return <option key={tz} value={tz}>{tz}</option>
                      })
                  }
                </select>
              </Form.Field>
              <Button onClick={this.handleSave}>Salvar alterações </Button>
            </Form>
        }
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
    save: (user) => dispatch(ActionCreators.updateProfileRequest(user)),
    reset: () => dispatch(ActionCreators.updateProfileReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)