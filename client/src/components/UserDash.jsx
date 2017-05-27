import React, { Component } from 'react';
import Header from './partials/Header';

class UserDash extends Component {
  render() {
    return (
      <div>
        <Header path1='/search' link1='Search' path2='/logout' link2='Logout'/>
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