import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Segment, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import momentTz from 'moment-timezone'
import InputMoment from 'input-moment'
import 'input-moment/dist/input-moment.css'

import ActionCreators from '../../redux/actionCreators'

class CreateRun extends Component {

  state = {
    friendly_name: "", 
    duration: 0, 
    distance: 0, 
    created: moment(),
    error: "",
  }

  componentDidMount () {
    this.props.reset()
  }

  handleChange = fieldname => event => {
    this.setState({
      [fieldname]: event.target.value,
    })
  }

  handleSave = () => {
    const originalDate = momentTz.tz(this.state.created, this.props.auth.user.timezone)
    const formatedDate = originalDate.clone().utc().format("YYYY-MM-DD H:mm:ss")
    const unit = this.props.auth.user.unit  
    const { friendly_name, duration, distance } = this.state
    this.props.create({ 
      friendly_name, 
      duration, 
      distance: unit === "metric" ? distance : distance * 1.60934, 
      created: formatedDate,
    })
  }

  render () {

    if (this.props.runs.saved) {
      return <Redirect to="/restrito/runs" />
    }

    return (
      <div>
        <h1>Nova corrida</h1>
        { this.props.runs.saved && <Segment color="green">Corrida criada com sucesso</Segment> }
        { 
          !this.props.runs.saved &&  
            <Form>
              <Form.Field>
                <label>Nome: </label>
                <input type="text" value={this.state.friendly_name} onChange={this.handleChange("friendly_name")} />
              </Form.Field>
              <Form.Field>
                <label>Duração em segundos: </label>
                <input type="number" value={this.state.duration} onChange={this.handleChange("duration")} />
              </Form.Field>
              <Form.Field>
                <label>Distância em ({ this.props.auth.user.unit === 'metric' ? 'km' : 'mi' }): </label>
                <input type="number" value={this.state.distance} onChange={this.handleChange("distance")} />
              </Form.Field>
              <Form.Field>
                <label>Data: </label>
                <input type="text" value={this.state.created.format("DD/MM/YYYY H:mm:ss")} onChange={this.handleChange("created")} />
              </Form.Field>
              <InputMoment 
                moment={this.state.created}
                onChange={(date) => this.setState({ created: date })}
              />
              <br /><br />
              <div>
                <Button onClick={this.handleSave}>Salvar corrida</Button>
              </div>
              <br /><br />
            </Form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    runs: state.runs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
    reset: () => dispatch(ActionCreators.createRunReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRun)