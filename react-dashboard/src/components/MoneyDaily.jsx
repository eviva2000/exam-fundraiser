import React, { Component } from "react";

export default class MoneyDaily extends Component {
  render() {
    let amount = this.props.data.map(item => item.amount);
    let date = this.props.data.map(item => item.date.toString().slice(0, 10));
    let dateArray = [
      this.props.data.map(item => ({
        amount: item.amount,
        date: item.date.toString().slice(0, 10)
      }))
    ];
    console.log(dateArray);
    console.log(date);
    return <React.Fragment>{date}</React.Fragment>;
  }
}
