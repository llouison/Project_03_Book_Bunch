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

      books: [], //Using these values when I'm calling them in /src/components/SearchBookForm as the props
      user: 'lisa', 
      isLoggedIn: true,
      inputTitletValue:'',
      inputAuthorValue:'',
      inputIsbnValue:'',
      inputGenreValue:'',
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
    fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:rowling+intitle:chamber&key=AIzaSyBSbTuoPrwQ0PvCFj0uhq2MtGh3MEaoW0Y')
    .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    console.log(responseJson);
    //setting the state//
    this.setState((prevState) => {
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
