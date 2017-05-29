import React, { Component } from 'react';
import Header from './partials/Header';
import SearchResult from './SearchResult';
import Footer from './partials/Footer';


class SearchBookForm extends Component {
  /* When the form is submitted, we call the handleSearchSubmit.
   * The input boxes get their values from the updated values in state */

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
      this.handleSearchSubmit= this.handleSearchSubmit.bind(this);
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
   

  handleSearchSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${event.target.author.value}+isbn:${event.target.isbn.value}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({results: responseJson.items})
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
<<<<<<< HEAD
=======
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${event.target.author.value}+isbn:${event.target.isbn.value}&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y`)
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({results:responseJson.items})
    })
  }
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
  

  render() {
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Header path1='/' link1='Home' path2='/user' link2='My Collection' path3='/logout' link3='Logout'/>
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
        <button>Search for your book!" </button>
      </form>
      <ul>
      {console.log(this.state.results)}
=======
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
        <Header path1='/' link1='Home' path2='/user' link2='My Collection' path3='/logout' link3='Logout'/>
        <form
          className='search-book-form'
          onSubmit={this.handleSearchSubmit}
        >
          <label>Title:<input
            type='text'
            value={this.state.inputTitleValue}
            name='title'
            onChange={this.handleTitleInput}
          /></label><br/>
          <label>Author:<input
            type='text'
            value={this.state.inputAuthorValue}
            name='author'
            onChange={this.handleAuthorInput}
          /></label><br/>
          <label>ISBN:<input
            type='number'
            value={this.state.inputIsbnValue}
            name='isbn'
            onChange={this.handleIsbnInput}
          /></label><br/>
          <label>Genre:<input
            type='text'
            value={this.state.inputGenreValue}
            name='genre'
            placeholder='Genre'
            onChange={this.props.handleGenreInput}
          /></label><br/>
          <button>Search for your book!</button>
        </form>
        <ul>
<<<<<<< HEAD
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
        {this.state.results.map((value, index) =>{
          return(
            <SearchResult 
              volumeInfo={value.volumeInfo}
              userId={this.props.userId}
              key={index}
            />)
        })}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default SearchBookForm;