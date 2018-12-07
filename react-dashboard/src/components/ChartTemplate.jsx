import React, { Component } from "react";
import * as d3 from "d3";
import LineChart, { parseFlatArray } from "react-linechart";

export default class ChartTemplate extends Component {
  render() {
    let parseTime = d3.timeParse("%Y-%m-%d");
    let formatTime = d3.timeFormat("%d.%m.%Y");

    const points = this.props.data.map((item, index) => ({
      x: item.key.substring(0, 2),
      y: item.value
    }));
    const sorted = points.sort(function(a, b) {
      var key1 = a.x;
      var key2 = b.x;

      if (key1 > key2) {
        return -1;
      } else if (key1 === key2) {
        return 0;
      } else {
        return 1;
      }
    });

    console.table(sorted);

    let dataxy = [
      {
        color: "#de2235",
        points: sorted
      }
    ];

    return (
      <div>
        <div className="App">
          <h1>Daily Money Donated</h1>
          <LineChart
            width={600}
            height={400}
            ticks={dataxy[0].points.length}
            data={dataxy}
            xLabel="Dates"
            yLabel="DKK"
            xMin="1"
            yMin="0"
          />
        </div>
      </div>
    );
  }
}
