import React, { Component } from 'react';
import Header from './partials/Header';

/* setting the initial state of inputs and binding the methods to the component */
class Login extends Component {
  render() {
    return (
      <div>
        <Header path1='/register' link1='Register' path2='/login' link2='Login'/>
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