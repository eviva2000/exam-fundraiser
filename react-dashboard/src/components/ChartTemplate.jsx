import React, { Component } from "react";
import * as d3 from "d3";
import LineChart from "react-linechart";

export default class ChartTemplate extends Component {
  render() {
    const points = this.props.data.map(item => ({
      x: item.key,
      y: item.value
    }));

    //Sort data by dates
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

    //Create array of data for Linechart
    //Source: http://rafaelquintanilha.com/introducing-react-line-chart/

    let dataxy = [
      {
        color: "#de2235",
        points: sorted
      }
    ];
    //Create a linechart using following arguments:
    return (
      <div className="App">
        <h1>Daily Money Donated</h1>
        <LineChart
          height={360}
          width={950}
          title={"Daily Money Donated"}
          ticks={dataxy[0].points.length - 1}
          data={dataxy}
          xLabel="Dates"
          yLabel="DKK"
          yMin="0"
          // onPointHover={obj => `x: ${obj.x}<br />y: ${obj.y}`}
          xParser={d3.timeParse("%Y-%m-%d")}
          xDisplay={d3.timeFormat("%d %b")}
          hideYLabel="true"
          hideXLabel="true"
        />
      </div>
    );
  }
}
