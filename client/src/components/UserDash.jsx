import React, { Component } from 'react';
import Book from './Book.jsx';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { Link } from 'react-router-dom';

/* setting the initial state of usersBooks to an empty array and binding all methods in the class*/
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

  /* calling the getUsersBooks method when the component mounts*/
  componentDidMount(){
    this.getUsersBooks()
  }

  /* this method fetches the array of books associated with the user id then call the updateUsersBooks method*/
  getUsersBooks(){
    fetch(`/api/users/${this.props.userId}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        this.updateUsersBooks(responseJson.data.usersBooks);
    });
  }

  /* this method sets the array of books retrieved books in the state*/
   updateUsersBooks(books){
     this.setState((prevState) => {
      return {
        usersBooks: books,
      }
	  })
  }

  /* this method renders a welcome message and notifies the user that they have no books in the database and prompts them to start searching for books to add*/
  emptyList(){
    return(
      <div>
        <Header path1='/' link1='Home' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
        <p>Welcome {this.props.user}</p>
        <p>There are no books in your collection</p>
        <Link to='/search'>Start My Collection</Link>
        <Footer />
      </div>
    )
  }

  /* this method renders a welcome message and displays the user's books according to status*/
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
  
  /* the conditional statement determines what content to render depending on whether a user has books in their collection or not*/
  render() {
    if (this.state.usersBooks.length === 0) {
      return this.emptyList();
    } else {
      return this.renderBooks();
    }
  }
}

export default UserDash;