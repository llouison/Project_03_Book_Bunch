import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [], //Using these values when I'm calling them in /src/components/SearchBookForm as the props
      inputTitletValue:'',
      inputAuthorValue:'',
      inputIsbnValue:'',
      inputGenreValue:'',


    }

  }

componentDidMount(){
  fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:rowling+intitle:chamber&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y')
  .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    console.log(responseJson);
    //setting the state//
    this.setState((prevState) => {
          return {
            books: responseJson, //from api
          }
         });
      // console.log(responseJson.data.books)
  });
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

// handleFormSubmit(event) {
//     fetch('https://', { //Does the api we make go here or the NYTimes api?
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         title: event.target.title.value,
//         author: event.target.author.value,
//         isbn: event.target.isbn.value,
//         genre: event.target.genre.value
//       }),
//     })
//     .then((response) => {
//       return response.json()
//     })
    
//         this.setState((prevState) => {
//           return {
//             quotes: prevState.quotes.concat(newQuote),
//             inputContentValue: '',
//             inputAuthorValue: '',
//             inputGenreValue: '',
//           }
//         })
//       } 
  render() {
    return (
      <div className="App">
        <div className="App-header">

        

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
