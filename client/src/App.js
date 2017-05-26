import React, { Component } from 'react';
import Header from './components/partials/Header';
import Index from './components/Index';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import UserDash from './components/UserDash';
import UserBook from './components/UserBook';
import Footer from './components/partials/Footer';

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Redirect
} from 'react-router-dom'

import './App.css';

// This is a functional component that protects private routes
/*const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/login" />
    )
  )}/>
) */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [], 
      user: 'Joe Doe', 
      isLoggedIn: true,
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.loginUserState = this.loginUserState.bind(this)
  }

  loginUserState(){
      console.log('user state');
    }

  getBooks(){
  fetch('/api/books')
  .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    // console.log(responseJson);
    //setting the state//
    this.setState((prevState) => {

          return {
            books: responseJson, //from api
          }
         });
      // console.log(responseJson.data.books)
  });
}

  getUsers(){

}

// getGoogleBooks(){
//   fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:rowling+intitle:chamber&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y')
//     .then((response) => {
//     return response.json()
//   })
//   .then((responseJson) => {
//     console.log(responseJson);
//     //setting the state//
//     this.setState((prevState) => {
// }

  componentDidMount(){
    this.getBooks();
    this.getUsers();
    // this.getGoogleBooks();
  }

  handleRegistrationSubmit(event){
    event.preventDefault();
    fetch('/auth/register', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
    })
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
  }

  handleLoginSubmit(event){
    event.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      console.log(responseJson);
      // this.setState((prevState) => {
      // return {
      //   user: responseJson.user, 
      // }
      // })
    })
  }

  render() {
    return (
       <Router>
        <div className="app">
          <main>
            <Header />
            <Route exact path="/" component={Index} />
            {/*<Route path="/search" component={Search} />
          <PrivateRoute path="/user" user={this.state.user} isLoggedIn={this.state.isLoggedIn} component={UserDash} />
            <Route exact path="/user:id" render={() => {
              return (this.state.isLoggedIn)
              ? <UserDash user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
              : <Redirect to="/login" />
            }} />*/}
            <Route exact path="/user/:id" component={UserDash} />
            <Route path="/user/:id/:isbn" component={UserBook} />
            <Route path="/login" render={() => {
              return <Login handleLoginSubmit={this.handleLoginSubmit} />
            }} />
            <Route path="/register" render={() => {
              return <RegistrationForm handleRegistrationSubmit={this.handleRegistrationSubmit} />
            }} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
