import React, { Component } from 'react';
import AddIngredient from './layout'
import RecipeNameModal from './RecipeNameModal'
import { connect } from 'react-redux'
import { addIngredient, makeId, sendIngredients, sendTitle } from '../../actions'

class AddIngredientContainer extends Component {
  state = {
    ingredient: '',
    modalOpen: false
  }
  acceptRecipe = async title => {
    await this.props.dispatch(sendTitle(title, this.props.imageName, this.props.user.jwt))
    this.setState({ modalOpen: false })
    this.props.setImageName('')
    this.props.history.push('/nutrient')
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
    this.props.dispatch(sendIngredients(this.props.ingredients, this.props.imageName, this.props.user.jwt))
      .then(this.setState({ modalOpen: true }))
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
        {this.props.recipes.length > 0 &&
          <RecipeNameModal
            recipes={this.props.recipes}
            modalOpen={this.state.modalOpen}
            acceptRecipe={this.acceptRecipe}
          />
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  user: state.currentUser,
  recipes: state.recipes
})

export default connect(mapStateToProps)(AddIngredientContainer);