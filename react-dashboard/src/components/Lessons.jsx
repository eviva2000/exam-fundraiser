import React, { Component } from "react";

export default class Lessons extends Component {
  render() {
    let total = this.props.materials.map(item => Number(item.hours));

    //Sums up numbers of the array hours)
    let sum = total.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }

    return (
      <React.Fragment>
        <h1>
          Teaching Hours Donated: <span>{sum}</span>{" "}
        </h1>
        <ul>
          {this.props.materials.map(item => (
            <li key={item.id}>
              <h2>
                {item.hours} hours of {item.profile}
              </h2>
              <h2>{item.name}</h2>
              <p className="comments">{item.comment}</p>
              <p className="email">{item.email}</p>
              <p className="date">{item.date.toString().slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
