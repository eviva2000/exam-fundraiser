import React, { Component } from "react";
import * as d3 from "d3";
import ChartTemplate from "./ChartTemplate.jsx";

export default class MoneyDaily extends Component {
  render() {
    let dateArray = this.props.data.map(item => ({
      amount: Number(item.amount),
      date: item.date.slice(0, 10)
    }));

    let nested = d3
      .nest()
      .key(d => {
        console.log(typeof d.date);
        let parseTime = d3.timeParse("%Y-%m-%d");
        let dateType = parseTime(d.date);
        let formatTime = d3.timeFormat("%d-%m-%Y");
        let formatedDate = formatTime(dateType);

        return formatedDate;
      })
      .rollup(a => {
        return d3.sum(a, d => {
          return d.amount;
        });
      })
      .entries(dateArray);
    console.log(nested);

    return (
      <React.Fragment>
        <ChartTemplate data={nested} />
      </React.Fragment>
    );
  }
}
