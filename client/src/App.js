// importing react
import React, { Component } from 'react';
// importing all components
import Index from './components/Index';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import Logout from './components/Logout';
import UserDash from './components/UserDash';
import UserIndivBook from './components/UserIndivBook';
import SearchBookForm from './components/SearchBookForm';

// importing react router
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

// importing stylesheet
import './App.css';

// This is a functional component that protects private routes
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => {
	console.log(props);
	console.log(rest);
	return (
    rest.isLoggedIn ? (
      React.createElement(component, Object.assign(rest, props))
    ) : (
      <Redirect to='/login' />
    )
  )}}/>
)

// creating the App class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '', 
      userId: '',
      isLoggedIn: false,
    }
    /* binding all methods in the App class that both reference 'this' and will also be called from the DOM*/
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  /* this method posts the entered values in the registration form to the users table to create a new user then calls the updateState method to set user info in state to the new user */
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

   /* this method posts the entered values in the login form to the users table to verify that the user exists and the password is correct then calls the updateState method to set user info in state to that user */
  handleLoginSubmit(event){
    event.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
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
  }

  /* this method sets user info in state to either a new user from registration or a known user from login */
  updateState(username, id){
    this.setState((prevState) => {
      return {
        user: username,
        userId: id,
        isLoggedIn: true,
      }
    })
  }

  /* this method logs a user out of the current session and changes the app state back to initial state*/
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

  /* Private routes are routed using the privateRoute functions component so that they always know the value of user and isloggedin boolean in state. Some routes use ternary conditional statements to handle redirects*/ 
  render() {
    return (
       <Router>
        <div className='app'>
          <main>
            <Route exact path='/' 
              component={Index} 
              user={this.state.user} 
              isLoggedIn={this.state.isLoggedIn}/>
            <PrivateRoute 
              exact path='/user' 
              user={this.state.user}
              userId={this.state.userId}
              isLoggedIn 
              component={UserDash} 
            />
            <PrivateRoute exact path='/user/:isbn' 
              user={this.state.user} 
              userId={this.state.userId} 
              isLoggedIn 
              component={UserIndivBook} 
            />
            <PrivateRoute exact path='/search' 
              userId={this.state.userId}
              isLoggedIn 
              component={SearchBookForm} 
            />
            <Route 
                path='/login' 
                render={() => ( this.state.isLoggedIn 
                  ? <Redirect push to='/user' /> 
                  : <Login handleLoginSubmit={this.handleLoginSubmit} /> 
                )} 
            />
            <Route 
                path='/register' 
                render={() => ( this.state.isLoggedIn 
                  ? <Redirect push to='/user' /> 
                  : <RegistrationForm handleRegistrationSubmit={this.handleRegistrationSubmit} /> 
                )} 
            />
            <Route 
                path='/logout' 
                render={() => ( this.state.isLoggedIn 
                  ? <Logout handleLogoutSubmit={this.handleLogoutSubmit} user={this.state.user}/>
                  : <Redirect push to='/'/> 
                )} 
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;