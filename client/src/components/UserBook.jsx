import React, { Component } from 'react';

class UserBook extends Component {
  render() {
    return (
      <div>
        <p>User: {this.props.user}</p>
         <p>title: {this.props.title}.</p>
        <p>ISBN: {this.props.match.params.isbn}.</p>
      </div>
    );
  }
}

export default UserBook;