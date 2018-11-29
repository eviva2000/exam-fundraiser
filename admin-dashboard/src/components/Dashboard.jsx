import React, { Component } from "react";
import TotalMoney from "./TotalMoney.jsx";
import Donators from "./Donators.jsx";
import MoneyDaily from "./MoneyDaily.jsx";
import MaterialDonations from "./MaterialDonations.jsx";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <TotalMoney />
        <Donators />
        <MoneyDaily />
        <MaterialDonations />
      </div>
    );
  }
}
