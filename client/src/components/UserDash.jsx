import React, { Component } from 'react';
<<<<<<< HEAD
import UserBook from './UserBook.jsx';
=======
import Header from './partials/Header';
>>>>>>> a876adc2909623db36ef56894bb18137e003a46e

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
        <ul className="usersBooks-list">
        {this.props.usersBooks.map((book) => {
          return (
            <UserBook key={isbn} book={book} />
          )
        })}
      </ul>
      </div>
    );
  }
}

export default UserDash;