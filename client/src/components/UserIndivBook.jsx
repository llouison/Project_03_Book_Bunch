import React, { Component } from 'react';
import Header from './partials/Header';

class UserBook extends Component {
    constructor(props){
        super(props);
        this.state = {
        user: this.props.user,
        userId: this.props.userId,
        usersBook: [],
        }
        this.getIndivBook = this.getIndivBook.bind(this);
        this.updateUsersBook = this.updateUsersBook.bind(this);
    }

    componentDidMount(){
        this.getIndivBook()
    }

    getIndivBook(isbn){
        fetch(`/api/users/${this.state.userId}/${this.props.match.params.isbn}`)
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            this.updateUsersBook(responseJson.data.usersBook[0])
        }); 
    }

    updateUsersBook(book){
        this.setState((prevState) => {
            return {
                usersBook: book,
            }
        })
    }

  render() {
    return (
      <div>
        <Header path1='/' link1='Home' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
        <img src={this.state.usersBook.image_url} alt={this.state.usersBook.title}/>
        <p>Title: {this.state.usersBook.title}</p>
        <p>Author: {this.state.usersBook.author}</p>
        <p>Genre: {this.state.usersBook.genre}</p>
        <p>Rating: {this.state.usersBook.rating}</p>
        <p>ISBN: {this.props.match.params.isbn}</p>
        <p>Description: {this.state.usersBook.description}</p>
        <p>Review: {this.state.usersBook.review}</p>
        <p>Status: {this.state.usersBook.status}</p>
        <p>Date Started: {this.state.usersBook.date_started}</p>
        <p>Date Finished: {this.state.usersBook.date_finished}</p>
      </div>
    );
  }
}

export default UserBook;