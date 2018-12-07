import React, { Component } from "react";

export default class Lessons extends Component {
  render() {
    let total = this.props.materials.map(item => Number(item.hours));

    //Sums up numbers of the array hours)
    let sum = total.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }
    console.log(sum);
    return (
      <ul>
        <h1>Total amount of Teaching hours donated: {sum} </h1>
        {this.props.materials.map(item => (
          <li key={item.id}>
            <h2>
              {item.hours} hours of {item.profile}
            </h2>
            <h2>{item.name}</h2>
            <p>{item.comment}</p>
          </li>
        ))}
      </ul>
    );
  }
}
