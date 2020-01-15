import React, { Component } from 'react';
import { fetchDiary, fetchSuggestions } from '../../actions'
import { Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import moment from 'moment'
import Grid from './Grid'
import List from './List'
import SuggestionModal from './SuggestionModal'
import { flexDiv, buttonContainer } from './style'

class index extends Component {
  state = {
    modalOpen: false
  }
  componentDidMount() {
    if (!this.props.user.jwt) {
      this.props.history.push('/')
    }
    this.props.dispatch(fetchDiary(moment(), this.props.user.jwt))
  }
  onClick = () => {
    this.props.dispatch(fetchSuggestions(moment(), this.props.user.jwt))
      .then(() => this.setState({ modalOpen: true }))
  }
  handleClose = () => {
    this.setState({ modalOpen: false })
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
            What should I eat?
    </Button>
          <Button
            onClick={() => this.props.history.push('/')}
          >
            Go to homepage
    </Button>
        </div>
        <SuggestionModal
          modalOpen={this.state.modalOpen}
          handleClose={this.handleClose}
          suggestions={this.props.suggestions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser,
  diaryEntry: state.diaryEntries,
  suggestions: state.suggestions
})

export default connect(mapStateToProps)(index);