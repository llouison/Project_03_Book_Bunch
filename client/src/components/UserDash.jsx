import React, { Component } from 'react';

class UserDash extends Component {
  render() {
    return (
      <div>
        <p>User Id: {this.props.match.params.id}.</p>
        <div className='shelf' id='read_books'>Read</div>
        <div className='shelf' id='reading_books'>Reading</div>
        <div className='shelf' id='toread_books'>To Read</div>
      </div>
    );
  }
}

export default UserDash;