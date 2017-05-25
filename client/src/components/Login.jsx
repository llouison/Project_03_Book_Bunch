import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputUsernameValue: '',
        inputPasswordValue: '',
        }
        this.handleInputUserNameChange = this.handleInputUserNameChange.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
    }

    handleInputUserNameChange(event) {
        console.log('change');
        this.setState({
        inputUsernameValue: event.target.value
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
      <form
        className="login_form"
        onSubmit={this.props.handleLoginSubmit}
      >
      <label/>Username:
      <input
          type="text"
          value={this.state.inputUserNameValue}
          name='username'
          onChange={this.handleInputUserNameChange}
      /><br/>

        <label/>Password:
        <input
          type="text"
          value={this.state.inputPasswordValue}
          name='password'
          onChange={this.handleInputPasswordChange}
        /><br/>
        
        <button>Login</button>
      </form>
    );
  }
}

export default Login;