import React, { Component } from 'react';
import AddIngredient from './layout'
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
    this.props.dispatch(sendIngredients(this.props.ingredients, this.props.imageName, this.props.user.jwt, this.props.history.push))
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
  ingredients: state.ingredients,
  user: state.currentUser
})

export default connect(mapStateToProps)(AddIngredientContainer);