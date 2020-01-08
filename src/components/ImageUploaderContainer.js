import React, { Component } from 'react';
import ImageUploader from './ImageUploader'

class ImageUploaderContainer extends Component {
  state = {
    picture: null
  }
  onDrop = picture => {
    this.setState({ picture });
  }
  render() {
    return (
      <ImageUploader onDrop={this.onDrop} />
    );
  }
}

export default ImageUploaderContainer