import React, { Component } from "react";
import Violins from "./Violins.jsx";
import Saxophones from "./Saxophones.jsx";
import CompositionBooks from "./CompositionBooks.jsx";
import Lessons from "./Lessons.jsx";

export default class MaterialDonations extends Component {
  render() {
    return (
      <div>
        <h1>Donated Material Support</h1>
        <Violins materials={this.props.materials} />
        <Saxophones materials={this.props.materials} />
        <CompositionBooks />
        <Lessons />
      </div>
    );
  }
}
