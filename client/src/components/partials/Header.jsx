import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='logo'>Book Bunch</h1>
        <Link to={this.props.path1}>{this.props.link1}</Link>
        <Link to={this.props.path2}>{this.props.link2}</Link>
        <Link to={this.props.path3}>{this.props.link3}</Link>
      </header>
    );
  }
}

export default Header;