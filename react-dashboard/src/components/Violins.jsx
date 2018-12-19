import React, { Component } from "react";
import Violin from "../Assets/violin.png";

export default class Violins extends Component {
  render() {
    let images = [];
    //Filters all donated materials in one array.
    let instrumentArray = this.props.materials.map(
      violins => violins.musicMaterial
    );

    let violinArray = instrumentArray.filter(
      instrument => instrument === "violins"
    );
    //Use the number of donated materials to create the same number of images.
    let number = violinArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img key={Math.random()} src={Violin} alt={"Violin"} height="100" />
      );
    }
    return (
      <div id="violins">
        {images}
        <h2 className="instrumentNumber">Donated Violins: {number}</h2>
      </div>
    );
  }
}
