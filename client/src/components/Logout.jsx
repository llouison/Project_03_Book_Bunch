import React, { Component } from 'react';
import Header from './partials/Header';

/* setting the initial state of inputs and binding the methods to the component */
class Login extends Component {
  render() {
    return (
      <div>
        <Header path1='/' link1='Home' path2='/user' link2='My Collection' path3='/search' link3='Search' />
        <h2>Thank you for using Book Bunch {this.props.user}</h2>
        <form
          className="logout_form"
          onSubmit={this.props.handleLogoutSubmit}
        >
          <button>Logout</button>
        </form>
      </div>
    );
  }
}

export default Login;