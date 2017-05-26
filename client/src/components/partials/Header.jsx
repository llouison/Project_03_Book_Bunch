import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='logo'>Book Bunch</h1>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </header>
    );
  }
}

export default Header;