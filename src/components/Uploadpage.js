import React, { Component } from 'react';
import { connect } from 'react-redux'
import ImageUploader from './ImageUploader';
import { Zoom } from '@material-ui/core'
import Ingredients from './Ingredients'
import AddIngredient from './AddIngredient'

class Uploadpage extends Component {
  state = {
    imageName: ''
  }
  setImageName = imageName => {
    this.setState({ imageName })
  }
  componentDidMount() {
    if (!this.props.user.jwt) {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        <Zoom in={true}>
          <div >
            {this.props.ingredients.length === 0 && <ImageUploader setImageName={this.setImageName} />}
            {this.props.ingredients.length > 0 && <Ingredients />}
            {this.props.ingredients.length > 0 && <AddIngredient history={this.props.history} imageName={this.state.imageName} setImageName={this.setImageName} />}
          </div>
        </Zoom>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser,
  ingredients: state.ingredients
})
export default connect(mapStateToProps)(Uploadpage);