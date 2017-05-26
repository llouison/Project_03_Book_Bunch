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

// This is a functional component that protects private routes
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
      usersBooks: '',
      //id: 1, 
      isLoggedIn: false,
    }
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
        users: responseJson.data.users, //from api
      }
  });
  });
}

getUrlId(){

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
    this.getUsersBooks();
    // this.getUsers();
    // this.getGoogleBooks();
  }

  handleLoginSubmit(event){
    event.preventDefault();
    console.log('login submit');
  }

  render() {
    return (
       <Router>
        <div className="app">
          <main>
            <Header />
            <Route exact path="/" component={Index} />
            {/*<Route path="/search" component={Search} />*/}
          {/*<PrivateRoute path="/user" user={this.state.user} isLoggedIn={this.state.isLoggedIn} component={UserDash} />*/}
          <Route exact path="/user" render={() => {
            return (this.state.isLoggedIn)
            ? <UserDash user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
            : <Redirect to="/login" />
          }} />
            <Route path="/user/:isbn" component={UserBook} />
            <Route path="/login" render={() => {
              return <Login handleLoginSubmit={this.handleLoginSubmit} />
            }} />
            <Route path="/register" component={RegistrationForm} />
            <Footer />
            <Link to="/user">User</Link>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
