import React, { Component } from 'react';

class UserBook extends Component {
  render() {
    return (
      <div>
        <p>ISBN: {this.props.match.params.isbn}.</p>
      </div>
    );
  }
}

export default UserBook;