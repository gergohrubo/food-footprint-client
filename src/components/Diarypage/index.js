import React, { Component } from 'react';
import { fetchDiary } from '../../actions'
import { Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import moment from 'moment'
import Grid from './Grid'
import List from './List'
import { flexDiv, buttonContainer } from './style'

class index extends Component {
  componentDidMount() {
    if (!this.props.user.jwt) {
      this.props.history.push('/')
    }
    this.props.dispatch(fetchDiary(moment(), this.props.user.jwt))
  }
  onClick = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Typography variant="h5">
          Here are your meals and total nutrition for today!
      </Typography>
        <div style={flexDiv}>
          {this.props.diaryEntry.nutrients &&
            <List
              nutrients={this.props.diaryEntry.nutrients}
            />
          }
          {this.props.diaryEntry.meals &&
            <Grid
              meals={this.props.diaryEntry.meals}
            />
          }
        </div>
        <div style={buttonContainer}>
          <Button
            onClick={this.onClick}
          >
            Go to homepage
    </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser,
  diaryEntry: state.diaryEntries
})

export default connect(mapStateToProps)(index);