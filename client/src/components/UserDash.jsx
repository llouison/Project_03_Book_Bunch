import React, { Component } from 'react';

class UserDash extends Component {
  render() {
    return (
      <div>
        {/*<p>User Id: {this.props.user}.</p>*/}
        <p>User: {this.props.user}</p>
        <div className='shelf' id='read_books'>
          <div className='book'></div>
        </div>
        <p>Read</p>
        <div className='shelf' id='reading_books'>
          <div className='book'></div>
        </div>
        <p>Reading</p>
        <div className='shelf' id='toread_books'>
          <div className='book'></div>
        </div>
        <p>To Read</p>
      </div>
    );
  }
}

export default UserDash;