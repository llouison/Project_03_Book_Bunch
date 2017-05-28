import React, { Component } from 'react';

class UserBook extends Component {
  render() {
    return (
      <div>
        <p>title: {this.props.match.params.isbn}.</p>
      </div>
    );
  }
}

export default UserBook;