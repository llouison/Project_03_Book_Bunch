import React, { Component } from 'react';
import Header from './components/partials/Header';
import Index from './components/Index';
import RegistrationForm from './components/RegistrationForm';
import UserDash from './components/UserDash';
import UserBook from './components/UserBook';
import Footer from './components/partials/Footer';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
       <Router>
        <div className="app">
          <main>
            <Header />
            <Route exact path="/" component={Index} />
            {/*<Route path="/search" component={Search} />*/}
            <Route path="/user/:id" component={UserDash} />
            <Route path="/user/:id/:isbn" component={UserBook} />
            <Route path="/register" component={RegistrationForm} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
