import React, { Component } from "react";
import Violins from "./Violins.jsx";
import Saxophones from "./Saxophones.jsx";
import CompositionBooks from "./CompositionBooks.jsx";
import Guitars from "./Guitars.jsx";

//Imports all the data of  material donations from children components and passis it back to the parent Dashboard.
export default class MaterialDonations extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Donated Material Support</h1>
        <div id="container">
          <Violins materials={this.props.materials} />
          <Saxophones materials={this.props.materials} />
          <Guitars materials={this.props.materials} />
          <CompositionBooks materials={this.props.materials} />
        </div>
      </React.Fragment>
    );
  }
}
