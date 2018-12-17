import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1 id="greeting">Hi Admin!</h1>
        <h1 id="signOut">Sign Out</h1>
      </div>
    );
  }
}
