import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    return(
      <li className='book_result'>
        <p>Title:{this.props.volumeInfo.title}</p>
        <p>Author: {this.props.volumeInfo.authors}</p>
        <p>Description: {this.props.volumeInfo.description}</p>
        <button>Add It</button>
      </li>
    );
  }
}

export default SearchResult;