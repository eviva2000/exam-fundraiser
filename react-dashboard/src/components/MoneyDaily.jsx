import React, { Component } from "react";
import * as d3 from "d3";
import ChartTemplate from "./ChartTemplate.jsx";

export default class MoneyDaily extends Component {
  render() {
    let dateArray = this.props.data.map(item => ({
      amount: Number(item.amount),
      date: item.date.slice(0, 10)
    }));

    //Modifies data using D3 module to be used for creating a chart.

    let properties = d3
      .nest()
      .key(d => {
        return d.date;
      })

      //Sums all donations made in one day.
      .rollup(a => {
        return d3.sum(a, d => {
          return d.amount;
        });
      })
      .entries(dateArray);

    return (
      <React.Fragment>
        <ChartTemplate data={properties} />
      </React.Fragment>
    );
  }
}
