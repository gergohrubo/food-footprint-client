import React, { Component } from 'react';
import { connect } from 'react-redux'
import ImageUploader from './ImageUploader';
import Ingredients from './Ingredients'
import AddIngredient from './AddIngredient'

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
          <ImageUploader />
          <Ingredients />
        </div>
        <AddIngredient history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})


export default connect(mapStateToProps)(Uploadpage);