import React, { Component } from "react";
import firebase from "../modules/firebase";
export default class SignUpForm extends Component {
  render() {
    function signUp(e) {
      let email = document.querySelector("#signUpEmail").value;
      let password1 = document.querySelector("input[name='password1']").value;
      let password2 = document.querySelector("input[name='password2']").value;
      let passwordsMatch = password1.localeCompare(password2);

      if (
        passwordsMatch === 0 &&
        document.querySelector("#signUpForm").checkValidity()
      ) {
        e.preventDefault();
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password2)
          .then(() => {
            document.querySelector("#closeBtn").click();
            document.querySelector("#errorMsg").textContent = "";
          })
          .catch(error => {
            document.querySelector("#errorMsg").textContent = error;
          });
      }
    }
    return (
      <React.Fragment>
        <form id="signUpForm">
          <p id="errorMsg" />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            id="signUpEmail"
          />
          <input
            required
            type="password"
            minLength="6"
            name="password1"
            placeholder="Password (at least 6 characters)"
          />
          <input
            required
            minLength="6"
            type="password"
            name="password2"
            placeholder="Repeat the Password"
          />
          <button onClick={signUp} type="submit">
            Create
          </button>
          <button id="closeBtn" onClick={this.props.status}>
            Close
          </button>
        </form>
      </React.Fragment>
    );
  }
}
