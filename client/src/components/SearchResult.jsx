import React, { Component } from 'react';

class SearchResult extends Component {
  addUserBook(event){
    event.preventDefault();
    console.log('add it!');
  }

  render() {
    return(
      <li className='book_result'>
        <p>Title:{this.props.volumeInfo.title}</p>
        <p>Author: {this.props.volumeInfo.authors}</p>
        <p>Genre: {this.props.volumeInfo.categories}</p>
        <p>ISBN: {this.props.volumeInfo.industryIdentifiers[0].identifier}</p>
        <p>Description: {this.props.volumeInfo.description}</p>
        <p>Rating: {this.props.volumeInfo.averageRating}</p>
        <p>Image URL: <a href='{this.props.volumeInfo.imageLinks.thumbnail}' target='_blank'>{this.props.volumeInfo.imageLinks.thumbnail}</a></p>
        <form
        className="add_book_form"
        onSubmit={this.addUserBook}
        >
          <button>Add It</button>
        </form>
      </li>
    );
  }
}

export default SearchResult;