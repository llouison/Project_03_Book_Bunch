import React, { Component } from 'react';
import Index from './components/Index';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import Logout from './components/Logout';
import UserDash from './components/UserDash';
import UserBook from './components/UserBook';
import Footer from './components/partials/Footer';
import SearchBookForm from './components/SearchBookForm';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import './App.css';

// This is a functional component that protects private routes
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLoggedIn ? (
      React.createElement(component, Object.assign(rest, props))
    ) : (
      <Redirect to="/login" />
    )
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [], 
      usersBooks: [],
      user: '', 
      userId: '',
      isLoggedIn: false,
    }
    /* binding all methods in the App class that both reference this and will also be called from the DOM*/
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);

    this.updateState = this.updateState.bind(this);

    // this.getBooks = this.getBooks.bind(this);
    this.updateUsersBooks = this.updateUsersBooks.bind(this);
    this.getUsersBooks = this.getUsersBooks.bind(this);
  }

  componentDidMount(){
    // this.getBooks();
  }

  // getBooks(){
  //   fetch('/api/books')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((responseJson) => {
  //       this.setState((prevState) => {
  //       return {
  //         books: responseJson.data.books,
  //       }
  //     });
  //   });
  // }

  handleRegistrationSubmit(event){
    event.preventDefault();
    console.log('registering new user');
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
        this.updateState(responseJson.data.user.username, responseJson.data.user.id);
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
      this.updateState(responseJson.user.username, responseJson.user.id);
    });
    console.log(this.state);
  }

  updateState(username, id){
    this.setState((prevState) => {
      return {
        user: username,
        userId: id,
        isLoggedIn: true,
      }
    })
    this.getUsersBooks();
  }

  getUsersBooks(){
    fetch(`/api/users/${this.state.userId}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        this.updateUsersBooks(responseJson.data.usersBooks);
      console.log('in state', responseJson.data.usersBooks)
    });
  }

   updateUsersBooks(books){
	 console.log(books);
     this.setState((prevState) => {
      return {
        usersBooks: books,
      }
    }, () => {
	  console.log('updated books', this.state.usersBooks) 
	})
  }

  addUserBook(event){
      event.preventDefault();
      
      
    }

  updateUserBook(){
  }

  handleDeleteBook(){
    fetch(`/api/users/${this.state.usersBooks}`, {
      method: 'DELETE',
    })
    .then ((response) => {
      if (response.status === 200){
        this.getUsersBooks();
      }
    })
  }

  handleLogoutSubmit(event){
    event.preventDefault();
    fetch('auth/logout')
    this.setState((prevState) => {
        return {
          user: null, 
          userId: null,
          isLoggedIn: false,
        }
      })
  }

  render() {
    return (
       <Router>
        <div className="app">
          <main>
          <Route exact path="/" component={Index} />
          <PrivateRoute 
            exact path="/user" 
            user={this.state.user}
            // usersBooks={this.state.usersBooks}
            isLoggedIn 
            component={UserDash} 
          />
          <PrivateRoute exact path="/user/:isbn" user={this.state.user} isLoggedIn component={UserBook} />
          {/*<Route exact path="/user:id" render={() => {
              return (this.state.isLoggedIn)
              ? <UserDash user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
              : <Redirect to="/login" />
            }} />
            <Route exact path="/user/:id" component={UserDash} />
            <Route path="/user/:id/:isbn" component={UserBook} />
            <Route path="/user/:isbn" render={() => {
              return <UserBook handleLoginSubmit={this.handleLoginSubmit} />
            }} />*/}
            <Route 
                path='/login' 
                render={() => ( this.state.isLoggedIn 
                  ? <Redirect push to='/user' /> 
                  : <Login handleLoginSubmit={this.handleLoginSubmit}
            />) } />
            <Route 
                path='/register' 
                render={() => ( this.state.isLoggedIn 
                  ? <Redirect push to='/user' /> 
                  : <RegistrationForm handleRegistrationSubmit={this.handleRegistrationSubmit}
            />) } />
            <Route 
                path='/logout' 
                render={() => ( this.state.isLoggedIn 
                  ? <Logout handleLogoutSubmit={this.handleLogoutSubmit}/>
                  : <Redirect push to='/'/> 
                )} 
            />
            <Route path='/search' component={SearchBookForm} />

            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;