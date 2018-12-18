import React, { Component } from "react";
import firebase from "../modules/firebase";

export default class Header extends Component {
  render() {
    function signOut() {
      firebase
        .auth()
        .signOut()
        .then(function(error) {
          console.error("Sign Out Error", error);
        });
    }
    return (
      <div id="header">
        <h1 id="greeting">Hi Admin!</h1>
        <h1 id="signUp">Create an Admin Account</h1>
        <h1 id="signOut" onClick={signOut}>
          Sign Out
        </h1>
      </div>
    );
  }
}
