import React, { Component } from 'react';
import Signup from './layout'
import { connect } from 'react-redux'
import { signUp } from '../../actions'

class index extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    modalOpen: true
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.dispatch(signUp(this.state.username, this.state.password, this.state.email))
      .then(() => {
        this.props.callForSignup(false)
      })
      .catch(console.error)
  }
  render() {
    return (
      <div>
        <Signup
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          modalOpen={this.state.modalOpen}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect()(index);