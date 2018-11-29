import React, { Component } from "react";
import Guitars from "./Guitars.jsx";
import Saxophones from "./Saxophones.jsx";
import CompositionBooks from "./CompositionBooks.jsx";
import Lessons from "./Lessons.jsx";

export default class MaterialDonations extends Component {
  render() {
    return (
      <div>
        <Guitars />
        <Saxophones />
        <CompositionBooks />
        <Lessons />
      </div>
    );
  }
}
