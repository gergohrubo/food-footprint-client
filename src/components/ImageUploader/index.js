import React, { Component } from 'react';
import ImageUploader from './layout'
import { connect } from 'react-redux'
import { fetchIngredients } from '../../actions'

class ImageUploaderContainer extends Component {
  state = {
    picture: null
  }
  onDrop = picture => {
    this.setState({ picture });
    console.log(this.state.picture[0])
    const data = new FormData()
    data.append('image', this.state.picture[0], this.state.picture[0].name)
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