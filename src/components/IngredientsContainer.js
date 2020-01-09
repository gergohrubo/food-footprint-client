import React, { Component } from 'react';
import { connect } from 'react-redux'
import Ingredients from './Ingredients'

class IngredientsContainer extends Component {
  onClick = event => {
    console.log('clicked', event)
  }
  onDelete = event => {
    console.log('deleted', event)
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