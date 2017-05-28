import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={this.state.path}><img src={this.props.book.image_url} alt={this.props.book.title}/></Link>
        <p>title: {this.props.book.title}</p>
      </div>
    );
  }
}

export default UserBook;