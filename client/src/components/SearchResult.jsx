import React, { Component } from 'react';

class SearchResult extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: {this.props.volumeInfo.title}, 
  //     author: {this.props.volumeInfo.authors}, 
  //     genre: {this.props.volumeInfo.categories}, 
  //     isbn: {this.props.volumeInfo.industryIdentifiers[0].identifier}, 
  //     description: {this.props.volumeInfo.description}, 
  //     rating: {this.props.volumeInfo.averageRating}, 
  //     image_url: {this.props.volumeInfo.imageLinks.thumbnail},
  //   }
  //   this.addUserBook = this.addUserBook.bind(this);
  // }

  // let bookInfo = {
  //     title: {this.props.volumeInfo.title}, 
  //     author: {this.props.volumeInfo.authors}, 
  //     genre: {this.props.volumeInfo.categories}, 
  //     isbn: {this.props.volumeInfo.industryIdentifiers[0].identifier}, 
  //     description: {this.props.volumeInfo.description}, 
  //     rating: {this.props.volumeInfo.averageRating}, 
  //     image_url: {this.props.volumeInfo.imageLinks.thumbnail},
  // }
  
  // addUserBook(event){
  //   event.preventDefault();
  //   console.log('add it!');
  //   fetch('/api/books', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({ bookInfo }),
  //   })
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((responseJson) => {
  //     console.log(responseJson);
  //     if (responseJson.data.tweed.id !== undefined) {
  //       const newTweed = {
  //         id: responseJson.data.tweed.id,
  //         tweed_text: responseJson.data.tweed.tweed_text,
  //         tweed_time: responseJson.data.tweed.tweed_time,
  //       }
  //       this.setState((prevState) => {
  //         return {
  //           tweeds: prevState.tweeds.concat(newTweed),
  //           inputTweedValue: '',
  //         }
  //       })
  //     } else {
  //       console.log('error');
  //     }
  //   })
  // // }
  // }

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