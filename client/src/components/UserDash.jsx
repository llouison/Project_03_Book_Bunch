import React, { Component } from 'react';
import UserBook from './UserBook.jsx';
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
        <ul className="usersBooks-list">
        {/*{this.props.usersBooks.map((book) => {
          return (
<<<<<<< HEAD
            <UserBook key={isbn} book={book} />
          )
=======
            <UserBook 
              user={this.props.user} 
              key={book.isbn}
              isbn={book.isbn}
              title={book.title}
            />
            )
>>>>>>> c54a4ec6206acb4a568cdd07c0d572c6f794d78c
        })}*/}
      </ul>
      </div>
    );
  }
}

export default UserDash;