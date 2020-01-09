import React, { Component } from 'react';
import { connect } from 'react-redux'
import Ingredients from './Ingredients'

class IngredientsContainer extends Component {
  render() {
    return (
      <div>
        <Ingredients ingredients={this.props.ingredients} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps)(IngredientsContainer);