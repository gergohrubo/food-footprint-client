import React, { Component } from 'react';
import Homepage from './layout'
import Login from '../Login'
import Signup from '../Signup'
import { connect } from 'react-redux'
import { logOut } from '../../actions'

class HomepageContainer extends Component {
  state = {
    calledForSignup: false
  }
  callForSignup = call => {
    this.setState({ calledForSignup: call })
  }
  logOut = () => {
    this.props.dispatch(logOut())
  }
  render() {
    return (
      <div>
        <Homepage history={this.props.history} user={this.props.user} logOut={this.logOut} />
        {!this.props.user.jwt && !this.state.calledForSignup && <Login callForSignup={this.callForSignup} />}
        {!this.props.user.jwt && this.state.calledForSignup && <Signup callForSignup={this.callForSignup} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(HomepageContainer);