import React, { Component } from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.volumeInfo.title, 
      author: this.props.volumeInfo.authors[0], 
      genre: this.props.volumeInfo.categories[0], 
      isbn: parseInt(this.props.volumeInfo.industryIdentifiers[1].identifier.slice(0,9)), 
      description: this.props.volumeInfo.description, 
      rating: this.props.volumeInfo.averageRating, 
      image_url: this.props.volumeInfo.imageLinks.thumbnail,
      bookId: null,
      userId: this.props.userId,
    }
    this.addBook = this.addBook.bind(this);
    this.addUsersBook = this.addUsersBook.bind(this);
  }


// adding the selected book to the books table
  addBook(event){
    event.preventDefault();
    fetch(`/api/books`,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        isbn: this.state.isbn,
        description: `${this.state.description.slice(0,1020)}...`,
        rating: this.state.rating,
        image_url: this.state.image_url,
      })
   })
   .then((response) => {
     return response.json();
   })
   .then((responseJson) => {
     console.log(responseJson)
     this.setState({
       bookId: responseJson.data.book.id,
     })
     this.addUsersBook();
   })
  }

  // adding the user and the book to the users_books table
  addUsersBook(){
    console.log(this.state.userId, this.state.bookId)
      fetch(`/api/users/${this.state.userId}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId: this.state.userId,
          bookId: this.state.bookId,
        })
      })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
  }

  render() {
    return(
      <li className='book_result'>
        <img src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
        <p>Title:{this.props.volumeInfo.title}</p>
        <p>Author: {this.props.volumeInfo.authors}</p>
        <p>Genre: {this.props.volumeInfo.categories}</p>
        <p>ISBN: {this.props.volumeInfo.industryIdentifiers[0].identifier}</p>
        <p>Description: {this.props.volumeInfo.description}</p>
        <p>Rating: {this.props.volumeInfo.averageRating}</p>
        <button onClick={this.addBook}>Add It Here</button>
      </li>
    );
  }
}

export default SearchResult;