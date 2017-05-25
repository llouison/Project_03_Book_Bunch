import React, { Component } from 'react';

class SearchBookForm extends Component {
  /**
   * When the form is submitted, we call the handleBookSubmit method passed
   * down from App. The input boxes get their values from the props we passed
   * down from App 
   */

   constructor(props) {
    super(props);
    this.state = {
      books: [],
      inputTitleValue: '',
      inputAuthorValue: '',
      inputIsbnValue: '',
      inputGenreValue: '',

    }
      this.handleFormSubmit= this.handleFormSubmit.bind(this);
   }


handleInputTitleChange(event) {
    this.setState({inputTitleValue: event.target.value});
  }

handleInputAuthorChange(event) {
    this.setState({inputAuthorValue: event.target.value});
  }

handleInputIsbnChange(event) {
    this.setState({inputIsbnValue: event.target.value});
  }

handleInputGenreChange(event) {
    this.setState({inputAuthorValue: event.target.value});
  }


  handleFormSubmit(event) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${event.target.author.value}&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y`), { //Does the api we make go here or the NYTimes api?
      
    .then((response) => {
      return response.json()
    })

  }
    
      //   this.setState((prevState) => {
      //     return {
      //       quotes: prevState.quotes.concat(newQuote),
      //       inputContentValue: '',
      //       inputAuthorValue: '',
      //       inputGenreValue: '',
      //     }
      //   })
      // } 

  render() {
    return (
      <form
        className="search-book-form"
        onSubmit={this.props.handleFormSubmit}
      >
        <input
          type="text"
          value={this.props.inputTitleValue}
          name='title'
          placeholder='Title'
          // onChange={this.props.handleInputContentChange}--Do we need this for state change?
        /><br/>
        <input
          type="text"
          value={this.props.inputAuthorValue}
          name='author'
          placeholder='Author'
          // onChange={this.props.handleInputAuthorChange}--not sure about how state change is going to play
        /><br/>
        <input
          type="number"
          value={this.props.inputIsbnValue}
          name='Isbn-number'
          placeholder='ISBN number'
          // onChange={this.props.handleInputGenreChange}--not sure about how state change is going to play
        /><br/>
        <input
          type="text"
          value={this.props.inputGenreValue}
          name='genre-typr'
          placeholder='Genre'
          // onChange={this.props.handleInputGenreChange}--not sure about how state change is going to play
        /><br/>
        <input type="submit" value="Search for your book!" />
      </form>
    );
  }
}

export default SearchBookForm;