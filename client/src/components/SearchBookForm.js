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
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${event.target.author.value}+isbn:${event.target.isbn.value}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({results: responseJson.items})
      })
    }


  render() {
    return (
      <div className='page'>
        <Header path1='/' link1='Home' path2='/user' link2='My Collection' path3='/logout' link3='Logout'/>
        <div className='search_container'>
        <form
          className='search_form'
          onSubmit={this.handleSearchSubmit}
        >
          <label>Title:<input
            type="text"
            value={this.state.inputTitleValue}
            name='title'
            onChange={this.handleTitleInput}
          /></label><br/>
          <label>Author:<input
          type="text"
          value={this.state.inputAuthorValue}
          name='author'
          onChange={this.handleAuthorInput}
          /></label><br/>
        <label>ISBN:<input
          type="number"
          value={this.state.inputIsbnValue}
          name='isbn'
          onChange={this.handleIsbnInput}
        /></label><br/>
        <label>Genre:<input
          type="text"
          value={this.state.inputGenreValue}
          name='genre'
          onChange={this.props.handleGenreInput}
        /></label><br/>
        <button>Search for your book</button>
      </form>
      </div>
      <div className='result'>
      <ul>
        {this.state.results.map((value, index) =>{
          return(
            <SearchResult 
              volumeInfo={value.volumeInfo}
              userId={this.props.userId}
              key={index}
            />)
        })}
        </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchBookForm;