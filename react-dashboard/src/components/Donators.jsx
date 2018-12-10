import React, { Component } from "react";

//Gets properties from the parent Dashboard, maps through the array and returns a list of amounts and names.
export default class Donators extends Component {
  render() {
    // let formatedDate = formatTime(dateType);
    return (
      <React.Fragment>
        <h1>Our Supporters</h1>
        <ul>
          {this.props.data.map(item => (
            <li key={item.id}>
              <h2>{item.amount} DKK</h2>
              <h2>{item.name}</h2>
              <p className="comments">{item.email}</p>
              <p className="date">{item.date.toString().slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
