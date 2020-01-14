import React, { Component } from 'react';
import AddIngredient from '../AddIngredient'
import { connect } from 'react-redux'
import { addIngredient, makeId, sendIngredients } from '../../actions'

class AddIngredientContainer extends Component {
  state = {
    ingredient: ''
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmitIngredient = event => {
    event.preventDefault()
    this.props.dispatch(addIngredient({
      name: this.state.ingredient,
      value: 0.999,
      app_id: 'main',
      id: `ai_${makeId(8)}`
    }))
    this.setState({ ingredient: '' })
  }
  onSubmitRecipe = () => {
    console.log('submitting the ingredients', this.props.ingredients)
    this.props.dispatch(sendIngredients(this.props.ingredients, this.props.history.push))
  }
  render() {
    return (
      <div>
        <AddIngredient
          onChange={this.onChange}
          onSubmitIngredient={this.onSubmitIngredient}
          onSubmitRecipe={this.onSubmitRecipe}
          ingredient={this.state.ingredient}
          listOfIngredients={this.props.ingredients}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps)(AddIngredientContainer);