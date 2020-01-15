import React, { Component } from 'react';
import Login from './layout'
import { sendLogin } from '../../actions'
import { connect } from 'react-redux'

class index extends Component {
  state = {
    username: '',
    password: '',
    modalOpen: true
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.dispatch(sendLogin(this.state.username, this.state.password))
  }
  render() {
    return (
      <div>
        <Login
          username={this.state.username}
          password={this.state.password}
          modalOpen={this.state.modalOpen}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          callForSignup={this.props.callForSignup}
        />
      </div>
    );
  }
}

export default connect()(index);