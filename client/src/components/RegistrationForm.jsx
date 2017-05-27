import React, { Component } from 'react';
import Header from './partials/Header';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputUsernameValue: '',
        inputEmailValue: '',
        inputPasswordValue: '',
        }
        this.handleInputUserNameChange = this.handleInputUserNameChange.bind(this);
        this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
    }  

    /* the handle change methods change the input value as the user types */
    handleInputUserNameChange(event) {
        console.log('change');
        this.setState({
        inputUsernameValue: event.target.value
        });
    }

     handleInputEmailChange(event) {
        console.log('change');
        this.setState({
        inputEmailValue: event.target.value
        });
    }

    handleInputPasswordChange(event) {
        console.log('change');
        this.setState({
        inputPasswordValue: event.target.value
        });
    }

  render() {
    return (
      <div>
        <Header path1='/register' link1='Register' path2='/login' link2='Login'/>
        <form
          className="registration-form"
          onSubmit={this.props.handleRegistrationSubmit}
        >

          <label/>Username:
          <input
            type="text"
            value={this.state.inputUserNameValue}
            name='username'
            onChange={this.handleInputUserNameChange}
          /><br/>

          <label/>Email:
          <input
            type="text"
            value={this.state.inputEmailValue}
            name='email'
            onChange={this.handleInputEmailChange}
          /><br/>

          <label/>Password:
          <input
            type="password"
            value={this.state.inputPasswordValue}
            name='password'
            onChange={this.handleInputPasswordChange}
          /><br/>
          
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;