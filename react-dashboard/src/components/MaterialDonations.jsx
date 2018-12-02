import React, { Component } from "react";
import Violins from "./Violins.jsx";
import Saxophones from "./Saxophones.jsx";
import CompositionBooks from "./CompositionBooks.jsx";
import Lessons from "./Lessons.jsx";

export default class MaterialDonations extends Component {
  render() {
    return (
      <div>
        <Violins />
        <Saxophones />
        <CompositionBooks />
        <Lessons />
      </div>
    );
  }
}
