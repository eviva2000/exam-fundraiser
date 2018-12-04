import React, { Component } from "react";
import TotalMoney from "./TotalMoney.jsx";
import Donators from "./Donators.jsx";
import MoneyDaily from "./MoneyDaily.jsx";
import MaterialDonations from "./MaterialDonations.jsx";

//This is the parent Component

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: true,
      data: [],
      materials: []
    }; //Current state returns an empty array
  }

  //This lifecycle method usually renders once after the component has mounted.
  //Here we fetch the data from the external database.

  componentDidMount() {
    setInterval(() => {
      if (this.state.user) {
        // Setting the interval makes sure this state updates and fethes data after the certain interval.
        fetch(
          "http://5bffd9ef0296210013dc7e55.mockapi.io/money-table?fbclid=IwAR0nDnDspJ-j42cP9m2DWn5Fwjr6PRl_EyRaVMYmCXHx8RKBld2Xswe_pOI"
        ).then(res => {
          res.json().then(result => {
            console.log(result);
            this.setState({ data: result });
          });
        });
        fetch(
          "http://5bffd9ef0296210013dc7e55.mockapi.io/material-table?fbclid=IwAR12fSE5W47qKETdsYW8Ws9T4Xxt9ch1OZ2FqttFwZy3CFl7HdDZfDo9MU0"
        ).then(res => {
          res.json().then(result => {
            console.log(result);
            this.setState({ materials: result });
          });
        });
      }
    }, 2000);
  }

  //Here we render all the children components.
  render() {
    return (
      <div id="dashboard">
        <section id="moneyDaily">
          <MoneyDaily data={this.state.data} />
        </section>
        <section id="totalMoney">
          <TotalMoney data={this.state.data} />
        </section>
        <section id="donators">
          <Donators data={this.state.data} index={this.state.data.index} />
        </section>

        <section id="materialDonations">
          <MaterialDonations
            className="container"
            materials={this.state.materials}
          />
        </section>
      </div>
    );
  }
}
