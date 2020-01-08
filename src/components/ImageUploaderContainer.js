import React, { Component } from 'react';
import ImageUploader from './ImageUploader'

class ImageUploaderContainer extends Component {
  state = {
    pictures: []
  }
  onDrop = picture => {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  render() {
    console.log('this.state', this.state)
    return (
      <ImageUploader />
    );
  }
}

export default ImageUploaderContainer