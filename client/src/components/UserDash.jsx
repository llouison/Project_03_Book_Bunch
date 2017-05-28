import React, { Component } from 'react';
import Book from './Book.jsx';
import Header from './partials/Header';

class UserDash extends Component {
 constructor(props) {
    super(props);
    this.emptyList = this.emptyList.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
  }

  emptyList(){
    return(
      <div>
        <Header path1='/search' link1='Search' path2='/logout' link2='Logout'/>
        <p>Welcome {this.props.user}</p>
        <p>There are no books in your collection</p>
      </div>
    )
  }

  renderBooks(){
     return(
      <div>
        <Header path1='/search' link1='Search' path2='/logout' link2='Logout'/>
        <p>Welcome back, {this.props.user}</p>
        <p>There are {this.props.usersBooks.length} books in your collection</p>
        {this.props.usersBooks.map((book, index) => {
          if (book.status === 'Reading'){
          return (
            <div className='shelf'>
              <h2>Reading</h2>
              <Book 
                user={this.props.user} 
                key={book.isbn}
                book={book}
              />
            </div>
            )
          }
          if (book.status === 'Read'){
          return (
            <div className='shelf'>
              <h2>Read</h2>
              <Book 
                user={this.props.user} 
                key={book.isbn}
                book={book}
              />
            </div>
            )
          }
          if (book.status === 'To Read'){
          return (
            <div className='shelf'>
              <h2>To Read</h2>
              <Book 
                user={this.props.user} 
                key={book.isbn}
                book={book}
              />
            </div>
            )
          }
        })}
      </div>
    )
  }
  
  render() {
    console.log('user dash', this.props.usersBooks.length)
    if (this.props.usersBooks.length === 0) {
      return this.emptyList();
    } else {
      return this.renderBooks();
    }
  }
}

export default UserDash;