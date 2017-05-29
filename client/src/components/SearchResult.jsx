import React, { Component } from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.volumeInfo.title, 
      author: this.props.volumeInfo.authors[0], 
<<<<<<< HEAD
<<<<<<< HEAD
      genre: this.props.volumeInfo.categories, 
      isbn: this.props.volumeInfo.industryIdentifiers[1].identifier, 
      description: this.props.volumeInfo.description[0], 
      rating: this.props.volumeInfo.averageRating, 
      image_url: this.props.volumeInfo.imageLinks.thumbnail,

=======
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
      genre: this.props.volumeInfo.categories[0], 
      isbn: parseInt(this.props.volumeInfo.industryIdentifiers[1].identifier), 
      description: this.props.volumeInfo.description, 
      rating: this.props.volumeInfo.averageRating, 
      image_url: this.props.volumeInfo.imageLinks.thumbnail,
      bookId: null,
      userId: this.props.userId,
<<<<<<< HEAD
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
    }
    this.addBook = this.addBook.bind(this);
    this.addUsersBook = this.addUsersBook.bind(this);
  }


// adding the selected book to the books table
  addBook(event){
    event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
    fetch('/api/books',{
=======
    fetch(`/api/books`,{
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
    fetch(`/api/books`,{
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
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

<<<<<<< HEAD
<<<<<<< HEAD
  // addToUsersBooks(event){
  //     event.preventDefault();
  //     fetch('http://localhost:3001/api/', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         id: ''
          
  //       })
  //     })
  // }
=======
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
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
<<<<<<< HEAD
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323

  render() {
    return(
      <li className='book_result'>
        <img src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
        <p>Title:{this.props.volumeInfo.title}</p>
        <p>Author: {this.props.volumeInfo.authors}</p>
        <p>Genre: {this.props.volumeInfo.categories}</p>
        <p>ISBN: {this.props.volumeInfo.industryIdentifiers[1].identifier}</p>
        <p>Description: {this.props.volumeInfo.description}</p>
        <p>Rating: {this.props.volumeInfo.averageRating}</p>
<<<<<<< HEAD
<<<<<<< HEAD
        
          <button className='add-book'
                  onClick={this.addUserBook}
          >
          Add It Here</button>
      
=======
        <button onClick={this.addBook}>Add It Here</button>
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
        <button onClick={this.addBook}>Add It Here</button>
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
      </li>
    );
  }
}

export default SearchResult;