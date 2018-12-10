import React, { Component } from "react";
import MainImage from "../mainpic.png";

export default class TotalMoney extends Component {
  render() {
    //Transforms strings in array to numbers
    let total = this.props.data.map(item => Number(item.amount));

    //Sums up numbers of the array (amounts)
    let sum = total.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }

    return (
      <React.Fragment>
        <img src={MainImage} alt={"saxofone"} />
        <h1>Total Money Raised</h1>
        <h1>{sum} DKK</h1>
        <h2>Goal: 50 000 DKK</h2>
        <h2> Today is: {new Date().toString().slice(4, 15)}</h2>
      </React.Fragment>
    );
  }
}
