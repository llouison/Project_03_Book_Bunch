import React, { Component } from 'react';
import Header from './partials/Header';

class UserBook extends Component {
    constructor(props){
        super(props);
        this.state = {
        user: this.props.user,
        userId: this.props.userId,
        entryId: null,
        review: '',
        usersBook: [],
        status: '',
        date_started: null,
        date_finished: null,
        isBeingEdited: false,
        }
        this.getIndivBook = this.getIndivBook.bind(this);
        this.updateUsersBook = this.updateUsersBook.bind(this);
        this.displayUserInfo = this.displayUserInfo.bind(this);
        this.renderUserInfo = this.renderUserInfo.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateStartedChange = this.handleDateStartedChange.bind(this);
        this.handleDateFinishedChange = this.handleDateFinishedChange.bind(this);
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleEntryDelete = this.handleEntryDelete.bind(this);
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
            console.log(responseJson.data.usersBook[0]);
            this.updateUsersBook(responseJson.data.usersBook[0])
        }); 
    }

    updateUsersBook(book){
        this.setState((prevState) => {
            return {
                usersBook: book,
                entryId: book.id,
                review: book.review,
                status: book.status,
                date_started: book.date_started.slice(0,10),
                date_finished: book.date_finished.slice(0,10),
            }
        })
    }

    displayUserInfo(){
        if (this.state.isBeingEdited === false) {
            return this.renderUserInfo();
        } else {
            return this.renderEditForm();
        }
    }

    renderUserInfo(){
        return(
            <div>
                <p>Review: {this.state.review}</p>
                <p>Status: {this.state.status}</p>
                <p>Date Started: {this.state.date_started}</p>
                <p>Date Finished: {this.state.date_finished}</p>
                <button onClick={() => {this.setState({isBeingEdited: true}) }}>Edit</button>
            </div>
        )
    }

    renderEditForm(){
        return (
            <div>
                <form
                    onSubmit={(event) => {
                        this.props.handleUserUpdate(event);
                        this.setState({isBeingEdited: false});
                    }}
                >
                    <label/>Review:<textarea
                        type="text"
                        value={this.state.review}
                        name='review'
                        onChange={this.handleReviewChange}>
                    </textarea><br/>
                    <label/>Status:<select name='status' value={this.state.status} onChange={this.handleStatusChange}>
                        <option value="Reading">Reading</option>
                        <option value="Read">Read</option>
                        <option value="To Read">To Read</option>
                    </select><br/>
                    <label/>Date Started:<input
                        type="date"
                        value={this.state.date_started}
                        name='date_started'
                        onChange={this.handleDateStartedChange}
                    /><br/>
                    <label>Date Finished:<input
                        type="date"
                        value={this.state.date_finished}
                        name='date_finished'
                        onChange={this.handleDateFinishedChange}
                    /></label><br/>
                    <button>Update</button>
                </form>
                <button onClick={() => { this.handleEntryDelete(5) }}>Delete</button>
            </div>
        )
    }

    handleReviewChange(event){
        console.log('change');
        this.setState({review: event.target.value});
    }

    handleStatusChange(event){
        console.log('change');
        this.setState({status: event.target.value});
    }

    handleDateStartedChange(event){
        console.log('change');
        this.setState({date_started: event.target.value});
    }

    handleDateFinishedChange(event){
        console.log('change');
        this.setState({date_started: event.target.value});
    }

    handleUserUpdate(event){
        event.preventDefault();
        console.log('update it!');
    }

    handleEntryDelete(entryId) {
        console.log('delete', this.state.entryId, );
        fetch(`/api/users/${this.state.userId}/${this.props.match.params.isbn}`, {
        method: 'DELETE',
        body:  JSON.stringify({ 
            id: this.state.entryId,
        }),
        })
        .then((response) => {
            if (response.status === 200) {
                console.log('deleted');
            }
        })
        .then(this.props.history.push('/user'));
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
            {this.displayUserInfo()}
        </div>
        );
    }
}

export default UserBook;