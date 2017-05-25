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
  Link,
  Redirect
} from 'react-router-dom'

import './App.css';

// This is a functional component
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    props.isLoggedIn ? (
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
      user: 'lisa', 
      isLoggedIn: true,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  getBooks(){
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
        users: responseJson.data.users, //from api
      }
  });
  });
  }

  componentDidMount(){
    this.getBooks();
    // this.getUsers();
  }

  handleLoginSubmit(event){
    event.preventDefault();
    console.log('login submit')
  }

  render() {
    return (
       <Router>
        <div className="app">
          <main>
            <Header />
            <Route exact path="/" component={Index} />
            {/*<Route path="/search" component={Search} />*/}
            <PrivateRoute path="/user/:id" user={this.state.user} component={UserDash} />
            <Route path="/user/:id/:isbn" component={UserBook} />
            <Route path="/login" component={Login} handleLoginSubmit={this.handleLoginSubmit}/>
            <Route path="/register" component={RegistrationForm} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
