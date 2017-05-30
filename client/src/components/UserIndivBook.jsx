import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

/* setting the initial state of usersBooks to an empty array and binding all methods in the class */
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

    /* calling the getIndivBook method when the component mounts */
    componentDidMount(){
        this.getIndivBook()
    }

    /* this method fetches the book associated with the user id and isbn number then calls the updateUsersBook method */
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

    /* this method sets the retrieved book information in the state */
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

    /* the conditional statement determines what content to render depending on whether the isBeingEdited boolean is true or not in the state */
    displayUserInfo(){
        if (this.state.isBeingEdited === false) {
            return this.renderUserInfo();
        } else {
            return this.renderEditForm();
        }
    }

    /* this method renders the user info as text while isBeingEdited is false. When the edit button is clicked, it changed the state of isBeingEdited to true */
    renderUserInfo(){
        return(
            <div className='user_info'>
                <div className='long_info'>
                <p><span className='reslabel'>Review:</span> </p>
                <div className='review_container'>
                <p>{this.state.review}</p>
                </div>
                </div>
                <div className='short_info'>
                <p><span className='reslabel'>Status:</span> {this.state.status}</p>
                <p><span className='reslabel'>Date Started:</span><br/> {this.state.date_started}</p>
                <p><span className='reslabel'>Date Finished:</span><br/> {this.state.date_finished}</p>
                <button onClick={() => {this.setState({isBeingEdited: true}) }}>Edit</button>
                <button className='secondaryBtn' onClick={() => { this.handleEntryDelete() }}>Delete</button>
                </div>
            </div>
        )
    }

    /* this method renders the user info as editable inputs while isBeingEdited is true and updates their value as the user types. When the update button is clicked, it call the handleUserUpdate method. If the delete utton is clicked it calls the handleEntryDelete method */
    renderEditForm(){
        return (
            <div className='user_info'>
                <form
                    className='bookEdit_form'
                    onSubmit={(event) => {
                        this.handleUserUpdate(event);
                        this.setState({isBeingEdited: false});
                    }}
                >
                    <div className='long_info_container'>
                    <div className='long_info'>
                    <textarea
                        type="text"
                        className='review_container'
                        value={this.state.review}
                        name='review'
                        placeholder='what are your thoughts on this book?'
                        onChange={this.handleReviewChange}>
                    </textarea><br/>
                    </div>
                    </div>
                    <div className='short_info'>
                    <label><span className='reslabel'>Status: </span><select name='status' value={this.state.status} onChange={this.handleStatusChange}>
                        <option value="Reading">Reading</option>
                        <option value="Read">Read</option>
                        <option value="To Read">To Read</option>
                    </select></label><br/>
                    <label><span className='reslabel'>Date Started:</span><input
                        type="date"
                        value={this.state.date_started}
                        name='date_started'
                        onChange={this.handleDateStartedChange}
                    /></label><br/>
                    <label><span className='reslabel'>Date Finished:</span><input
                        type="date"
                        value={this.state.date_finished}
                        name='date_finished'
                        onChange={this.handleDateFinishedChange}
                    /></label><br/>
                    <button>Update</button>
                    </div>
                </form>
            </div>
        )
    }

    /* the handle methods update the state of the form elements based on the user input events*/
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

    /* this method sends the updated values to the database and updates it there */
    handleUserUpdate(event){
        event.preventDefault();
        console.log('update it!');
        fetch(`/api/users/${this.state.userId}/${this.props.match.params.isbn}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                book: {
                    status: event.target.status.value,
                    review: event.target.review.value,
                    date_started: event.target.date_started.value,
                    date_finished: event.target.date_finished.value,
                },
            }),
        })
        .then((response) => {
            if (response.status === 200) {
                console.log('updated');
            }
        })
     }

     /* this method send a delete request to the database using the userId and book isbn number */
    handleEntryDelete() {
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
        <div className='page'>
            <Header path1='/user' link1='My Collection' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
            <div className='book_info'>
            <div className='short_info'>
            <img src={this.state.usersBook.image_url} alt={this.state.usersBook.title}/>
            <p><span className='reslabel'>Title:</span> {this.state.usersBook.title}</p>
            <p><span className='reslabel'>Author:</span> {this.state.usersBook.author}</p>
            <p><span className='reslabel'>Genre:</span> {this.state.usersBook.genre}</p>
            <p><span className='reslabel'>Rating:</span> {this.state.usersBook.rating}</p>
            <p><span className='reslabel'>ISBN:</span> {this.props.match.params.isbn}</p>
            </div>
            <div className='long_info'>
            <p><span className='reslabel'>Description:</span> </p>
            <div className='description_container'>
            <p>{this.state.usersBook.description}</p>
            </div>
            </div>
            </div>
            <hr/>
            {this.displayUserInfo()}
            <Footer />
        </div>
        );
    }
}

export default UserBook;