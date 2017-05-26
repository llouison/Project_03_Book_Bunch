import React, { Component } from 'react';
import Header from './components/partials/Header';
import Index from './components/Index';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import UserDash from './components/UserDash';
import UserBook from './components/UserBook';
import Footer from './components/partials/Footer';
import SearchBookForm from './components/SearchBookForm';

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Redirect
} from 'react-router-dom'

import './App.css';

// This is a functional component that protects private routes
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/login" />
    )
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [], 
      usersBooks: '',
      //id: 1, 
      user: null, 
      userId: null,
      isLoggedIn: false,
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getUsersBooks = this.getUsersBooks.bind(this);
  }

  getBooks(){
  fetch('/api/books')
  .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    console.log('Books');
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
  fetch('/api/users')
  .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    console.log(responseJson);
    //setting the state//
    this.setState((prevState) => {
      return {
        books: responseJson,
      }
    });
    // console.log(responseJson.data.books)
  });
}


getUsersBooks(){
  
   fetch(`/api/users/${this.state.id}`)
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      console.log('UsersBooks');
      this.setState((prevState) => {
       console.log(responseJson.data)
        return {
          usersBooks: responseJson.data,
        }
      });
    });
  }

  componentDidMount(){
    this.getBooks();
    this.getUsersBooks();
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
    // console.log(this.state);
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: "same-origin",
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      console.log(responseJson.user.id);
      this.setState((prevState) => {
        return {
          user: responseJson.user.username, 
          userId: responseJson.user.id,
          isLoggedIn: true,
        }
      })
    })
    console.log(this.state);
  }

  render() {
    return (
       <Router>
        <div className="app">
          <main>
          <Header />
            <p>hello {this.state.isLoggedIn}</p>
          <Route exact path="/" component={Index} />
          <PrivateRoute 
            exact path="/user" 
            user={this.state.user} 
            isLoggedIn 
            component={UserDash} 
          />
          {console.log(this.state.user)}
          <PrivateRoute path="/user/:isbn" user={this.state.books} isLoggedIn={this.state.isLoggedIn} component={UserBook} />
          {/*<Route exact path="/user:id" render={() => {
              return (this.state.isLoggedIn)
              ? <UserDash user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
              : <Redirect to="/login" />
            }} />
            <Route exact path="/user/:id" component={UserDash} />
            <Route path="/user/:id/:isbn" component={UserBook} />
            <Route path="/login" render={() => {
              return <Login handleLoginSubmit={this.handleLoginSubmit} />
            }} />*/}
            <Route 
                path='/login' 
                render={() => ( this.state.isLoggedIn 
                  ? <Redirect push to='/user' /> 
                  : <Login handleLoginSubmit={this.handleLoginSubmit}
            />) } />
            <Route path="/register" render={() => {
              return <RegistrationForm handleRegistrationSubmit={this.handleRegistrationSubmit} />
            }} />
            <Route path='/search' component={SearchBookForm} />

            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;