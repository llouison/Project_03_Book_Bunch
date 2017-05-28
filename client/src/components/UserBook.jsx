import React, { Component } from 'react';

class UserBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: `/user/${this.props.book.isbn}`,
    }
  }
  render() {
    return (
      <div>
        <a href={this.state.path}>
          <img src={this.props.book.image_url} alt={this.props.book.title}/> 
        </a>
        <p>title: {this.props.book.title}.</p>
      </div>
    );
  }
}

export default UserBook;