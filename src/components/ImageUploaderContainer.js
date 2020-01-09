import React, { Component } from 'react';
import ImageUploader from './ImageUploader'
import request from 'superagent'

class ImageUploaderContainer extends Component {
  state = {
    picture: null
  }
  onDrop = picture => {
    this.setState({ picture });
    const data = new FormData()
    data.append('image', this.state.picture[0], this.state.picture[0].name)
    request
      .post(`${process.env.REACT_APP_BACKEND_URL}/image`)
      .send(data)
      .then(response => {
        console.log(response)
      })
      .catch(console.error)
  }
  render() {
    return (
      <ImageUploader onDrop={this.onDrop} />
    );
  }
}

export default ImageUploaderContainer