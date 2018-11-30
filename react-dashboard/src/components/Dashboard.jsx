import React, { Component } from "react";
import TotalMoney from "./TotalMoney.jsx";
import Donators from "./Donators.jsx";
import MoneyDaily from "./MoneyDaily.jsx";
import MaterialDonations from "./MaterialDonations.jsx";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    setInterval(() => {
      fetch(
        "https://5bffd9ef0296210013dc7e55.mockapi.io/userinfo?fbclid=IwAR0NhN7G-StoO5qVzhjNS8uGoeBNXqawSUehT9E_QzNSdoF0NktGrMVR4G0"
      ).then(res => {
        res.json().then(result => {
          console.log(result);
          this.setState({ data: result });
        });
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(function(item, index) {
            return <h1>{item.name}</h1>;
          })}
        </ul>
        <TotalMoney />
        <Donators />
        <MoneyDaily />
        <MaterialDonations />
      </div>
    );
  }
}
