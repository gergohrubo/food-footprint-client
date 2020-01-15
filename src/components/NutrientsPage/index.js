import React, { Component } from 'react';
import { connect } from 'react-redux'
import NutrientsPage from './layout'
import { clearIngredients } from '../../actions'

class NutrientsContainer extends Component {
  state = {
    nutrients: {
      Calories: {
        amount: 555555,
        percentOfDailyNeeds: 55,
        unit: 'g'
      }
    }
  }
  onClick = page => {
    this.props.dispatch(clearIngredients())
    this.props.history.push(page)
  }
  componentDidMount() {
    if (!this.props.user.jwt) {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        <NutrientsPage
          nutrients={this.props.nutrients}
          recipes={this.props.recipes}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser,
  nutrients: state.nutrients,
  recipes: state.recipes
})

export default connect(mapStateToProps)(NutrientsContainer);