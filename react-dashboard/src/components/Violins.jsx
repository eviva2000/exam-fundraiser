import React, { Component } from "react";
import Violin from "../violin.png";

export default class Violins extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      violins => violins.musicMaterial
    );

    let violinArray = instrumentArray.filter(
      instrument => instrument === "violins"
    );

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
