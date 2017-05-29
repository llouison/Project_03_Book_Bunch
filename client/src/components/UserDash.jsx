import React, { Component } from 'react';
import Book from './Book.jsx';
import Header from './partials/Header';
import Footer from './partials/Footer';

class UserDash extends Component {
 constructor(props) {
    super(props);
    this.state = {
      usersBooks: [],
    }
    this.getUsersBooks = this.getUsersBooks.bind(this);
    this.updateUsersBooks = this.updateUsersBooks.bind(this);
    this.emptyList = this.emptyList.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
  }

  componentDidMount(){
    this.getUsersBooks()
  }

  getUsersBooks(){
    fetch(`/api/users/${this.props.userId}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        this.updateUsersBooks(responseJson.data.usersBooks);
    });
  }

   updateUsersBooks(books){
     this.setState((prevState) => {
      return {
        usersBooks: books,
      }
	  })
  }

  emptyList(){
    return(
      <div>
        <Header path1='/' link1='Home' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
        <p>Welcome {this.props.user}</p>
        <p>There are no books in your collection</p>
        <Footer />
      </div>
    )
  }

  renderBooks(){
     return(
      <div>
        <Header path1='/' link1='Home' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
        <p>Welcome back, {this.props.user}</p>
        <p>There are {this.state.usersBooks.length} books in your collection</p>
        <div className='shelf'>
          <h2>To Read</h2>
          {this.state.usersBooks.map((book) => {
            if (book.status === "To Read"){
            return (
              <Book 
                key={book.isbn}
                user={this.props.user} 
                book={book}
              />
            )
          }})}
        </div>
        <div className='shelf'>
          <h2>Reading</h2>
          {this.state.usersBooks.map((book) => {
            if (book.status === "Reading"){
            return (
              <Book 
                key={book.isbn}
                user={this.props.user} 
                book={book}
              />
            )
          }})}
        </div>
         <div className='shelf'>
          <h2>Read</h2>
          {this.state.usersBooks.map((book) => {
            if (book.status === "Read"){
            return (
              <Book 
                key={book.isbn}
                user={this.props.user} 
                book={book}
              />
            )
          }})}
        </div>
        <Footer />
      </div>
    )
  }
  
  render() {
    if (this.state.usersBooks.length === 0) {
      return this.emptyList();
    } else {
      return this.renderBooks();
    }
  }
}

export default UserDash;