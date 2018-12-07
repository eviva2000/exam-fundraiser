import React, { Component } from "react";

//Gets properties from the parent Dashboard, maps through the array and returns a list of amounts and names.
export default class Donators extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <li key={item.id}>
            <h2>{item.amount} DKK</h2>
            <h2>{item.name}</h2>
            <p>{item.comment}</p>
          </li>
        ))}
      </ul>
    );
  }
}
