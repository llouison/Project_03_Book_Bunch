import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputUsernameValue: '',
        }
        this.handleInputUserNameChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
    console.log('change');
    this.setState({
      inputUsernameValue: event.target.value
    });


  render() {
    return (
      <form
        className="login_form"
        onSubmit={this.state.inputUsernameValue}
      >
      <label/>Username:
      <input
          type="text"
          value={this.props.inputUserNameValue}
          name='username'
          onChange={this.handleInputUserNameChange}
      /><br/>

        <label/>Password:
        <input
          type="text"
          value={this.props.inputPasswordValue}
          name='password'
          placeholder='password'
          onChange={this.props.handleInputPasswordChange}
        /><br/>
        
        <button>Login</button>
      </form>
    );
  }
}

export default Login;