import React, { Component } from "react";
import firebase from "../modules/firebase";
export default class Header extends Component {
  render() {
    function signOut() {
      firebase
        .auth()
        .signOut()
        .then((window.location = "../index.html"))
        .catch(error => {
          console.error("Sign Out Error", error);
        });
    }
    return (
      <div id="header">
        <h1 id="greeting">Hi Admin!</h1>
        <h1 id="signUp" onClick={this.props.status}>
          Create Another Admin Account
        </h1>
        <h1 id="signOut" onClick={signOut}>
          Sign Out
        </h1>
      </div>
    );
  }
}
