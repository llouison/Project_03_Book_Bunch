import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }

  }

componentDidMount(){
  fetch('/api/books')
  .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    console.log(responseJson);
    //setting the state//
    this.setState((prevState) => {
          return {
            books: responseJson.data.books, //from api
          }
         });
  });
}
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
