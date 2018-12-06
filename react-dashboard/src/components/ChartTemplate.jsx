import React, { Component } from "react";
import * as d3 from "d3";
import LineChart from "react-linechart";

export default class ChartTemplate extends Component {
  render() {
    // let points = this.props.data.map(item => ({
    //   x: item.key,
    //   y: item.value
    // }));
    let data = [
      {
        color: "red",
        points: this.props.data.map(item => ({
          x: item.key,
          y: item.value
        }))
      }
    ];

    console.table(data);
    return (
      <div>
        <div className="App">
          <h1>My First LineChart</h1>
          <LineChart width={600} height={400} data={data} />
        </div>
      </div>
      //   <ul>
      //     {this.props.data.map(item => (
      //       <li key={item.id}>
      //         <h2>{item.value} DKK</h2>
      //         <h2>{item.key}</h2>
      //       </li>
      //     ))}
      //   </ul>
    );
  }
}
