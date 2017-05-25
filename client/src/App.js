import React, { Component } from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
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
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
