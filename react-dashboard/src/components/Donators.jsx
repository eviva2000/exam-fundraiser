import React, { Component } from "react";
// import DonatorListItem from "./DonatorListItem.jsx";

export default class Donators extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <li key={item.id}>
            <h2>{item.amount} DKK</h2>
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
    );
  }
}
