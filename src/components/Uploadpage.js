import React, { Component } from 'react';
import { connect } from 'react-redux'
import ImageUploaderContainer from './ImageUploaderContainer';
import IngredientsContainer from './IngredientsContainer'
import AddIngredientContainer from './AddIngredientContainer'

class Uploadpage extends Component {
  componentDidMount() {
    if (!this.props.user.jwt) {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        <div className="flex">
          <ImageUploaderContainer />
          <IngredientsContainer />
        </div>
        <AddIngredientContainer history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})


export default connect(mapStateToProps)(Uploadpage);