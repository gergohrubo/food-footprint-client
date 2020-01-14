import React, { Component } from 'react';
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import { saveIngredients } from '../actions'

class IngredientsContainer extends Component {
  onClick = event => {
    console.log('clicked', event)
  }
  onDelete = ingredientID => {
    console.log('deleted', ingredientID)
    const newIngredients = this.props.ingredients.filter(ingredient => ingredient.id !== ingredientID)
    this.props.dispatch(saveIngredients(newIngredients))
  }
  render() {
    return (
      <div>
        <Ingredients ingredients={this.props.ingredients} onClick={this.onClick} onDelete={this.onDelete} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps)(IngredientsContainer);