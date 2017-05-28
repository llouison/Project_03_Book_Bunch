import React, { Component } from 'react';
import SearchResult from './SearchResult';
import Header from './partials/Header';

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
      results: [],

    }
      this.handleFormSubmit= this.handleFormSubmit.bind(this);
      this.handleAuthorInput=this.handleAuthorInput.bind(this);
      this.handleTitleInput=this.handleTitleInput.bind(this);
      this.handleIsbnInput=this.handleIsbnInput.bind(this);
      this.handleGenreInput=this.handleGenreInput.bind(this);
   }

   handleAuthorInput(event) {
      this.setState({inputAuthorValue: event.target.value})
   }

   handleTitleInput(event){
     this.setState({inputTitleValue: event.target.value})
   }

   handleIsbnInput(event){
     this.setState({inputIsbnValue: event.target.value})
   }

   handleGenreInput(event){
     this.setState({inputGenreValue: event.target.value})
   }
   

  handleFormSubmit(event) {
    event.preventDefault();
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${event.target.author.value}+isbn:${event.target.isbn.value}&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y`)
        .then((response) => {
        
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({results:responseJson.items})
      })
    }

  
    // console.log('author', this.authorInput)
  //   fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${event.target.author.value}&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y`), { //Does the api we make go here or the NYTimes api?
      
  //   .then((response) => {
  //     return response.json()
  //   })

  // }
    
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
      <div>
      <Header path1='/user' link1='My Collection' path2='/logout' link2='Logout'/>
      <form
        className="search-book-form"
        onSubmit={this.handleFormSubmit}
      >
        <input
          type="text"
          value={this.state.inputTitleValue}
          name='title'
          placeholder='Title'
          onChange={this.handleTitleInput}
        /><br/>
        <input
         
          type="text"
          value={this.state.inputAuthorValue}
          name='author'
          placeholder='Author'
          // onChange={this.handleAuthor}
          onChange={this.handleAuthorInput}
        /><br/>
        <input
          type="number"
          value={this.state.inputIsbnValue}
          name='isbn'
          placeholder='ISBN number'
          onChange={this.handleIsbnInput}
        /><br/>
        <input
          type="text"
          value={this.state.inputGenreValue}
          name='genre'
          placeholder='Genre'
          onChange={this.props.handleGenreInput}
        /><br/>
        <input type="submit" value="Search for your book!" />
      </form>
      <ul>
        {this.state.results.map((value, index) =>{
            return(
              <SearchResult 
              volumeInfo={value.volumeInfo}
              key={value.volumeInfo.industryIdentifiers[0].identifier}
              />
            )
        })}
      </ul>
      </div>
    );
  }
}

export default SearchBookForm;