import React, { Component } from "react";
export default class SignUpForm extends Component {
  render() {
    function signUp(e) {
      e.preventDefault();
    }
    return (
      <React.Fragment>
        <form id="signUpForm">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password1" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Repeat the Password"
          />
          <button onClick={signUp}>Create</button>
          <button onClick={this.props.status}>Close</button>
        </form>
      </React.Fragment>
    );
  }
}
