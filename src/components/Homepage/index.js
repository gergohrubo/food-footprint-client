import React, { Component } from 'react';
import Homepage from './layout'

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        <Homepage history={this.props.history} />
      </div>
    );
  }
}

export default HomepageContainer;