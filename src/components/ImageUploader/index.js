import React, { Component } from 'react';
import ImageUploader from './layout'
import { connect } from 'react-redux'
import { fetchIngredients, makeId } from '../../actions'

class ImageUploaderContainer extends Component {
  state = {
    picture: null
  }
  onDrop = picture => {
    this.setState({ picture });
    const imageName = `${makeId(10)}.jpg`
    this.props.setImageName(imageName)
    const data = new FormData()
    data.append('image', this.state.picture[0], imageName)
    this.props.dispatch(fetchIngredients(data, this.props.user.jwt))
  }
  render() {
    return (
      <ImageUploader onDrop={this.onDrop} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(ImageUploaderContainer)