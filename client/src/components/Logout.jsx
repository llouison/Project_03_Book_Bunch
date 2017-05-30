import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

class Login extends Component {
  render() {
    return (
      <div className='page'>
        <Header path1='/' link1='Home' path2='/user' link2='My Collection' path3='/search' link3='Search' />
        <div className='main_container'>
        <h2>Thank you for using Book Bunch {this.props.user}</h2>
        <div className='form_container'>
        <form
          className="logout_form"
          onSubmit={this.props.handleLogoutSubmit}
        >
          <button>Logout</button>
        </form>
        </div>
        {/*<img src={require('../images/bookstack.png')}/>*/}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;