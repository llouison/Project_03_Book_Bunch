import React, { Component } from 'react';

class RegistrationForm extends Component {
  render() {
    return (
      <form
        className="registration-form"
        onSubmit={this.props.handleQuoteSubmit}
      >

      <label/>Username:
      <input
          type="text"
          value={this.props.inputUserNameValue}
          name='username'
          placeholder='username'
          onChange={this.props.handleInputUserNameChange}
      /><br/>

      <label/>Email:
        <input
          type="text"
          value={this.props.inputEmailValue}
          name='email'
          placeholder='email'
          onChange={this.props.handleInputEmailChange}
        /><br/>

        <label/>Password:
        <input
          type="text"
          value={this.props.inputPasswordValue}
          name='password'
          placeholder='password'
          onChange={this.props.handleInputPasswordChange}
        /><br/>
        
        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;