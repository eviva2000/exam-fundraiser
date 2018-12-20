import React, { Component } from "react";

//Gets properties from the parent Dashboard, maps through the array and returns a list of amounts, comments, dates and names.
export default class Donators extends Component {
  render() {
    return this.props.data.map(item => (
      <li key={item.id}>
        <h2>{item.amount} DKK</h2>
        <h2>{item.name}</h2>
        <p className="comments">{item.comment}</p>
        <p className="email">{item.email}</p>
        <p className="date">{item.date.toString().slice(0, 10)}</p>
      </li>
    ));
  }
}
