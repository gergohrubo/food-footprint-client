import React, { Component } from 'react';
import { connect } from 'react-redux'
import Ingredients from './layout'
import { saveIngredients } from '../../actions'

class IngredientsContainer extends Component {
  onDelete = ingredientID => {
    const newIngredients = this.props.ingredients.filter(ingredient => ingredient.id !== ingredientID)
    this.props.dispatch(saveIngredients(newIngredients))
  }
  render() {
    return (
      <div>
        <Ingredients ingredients={this.props.ingredients} onDelete={this.onDelete} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps)(IngredientsContainer);