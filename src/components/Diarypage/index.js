import React, { Component } from 'react';
import { fetchDiary } from '../../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import Grid from './Grid'
import List from './List'

class index extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDiary(moment(), this.props.user.jwt))
  }
  render() {
    return (
      <div>
        <Grid />
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(index);