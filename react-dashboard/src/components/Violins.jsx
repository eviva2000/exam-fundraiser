import React, { Component } from "react";
import Violin from "../violin.png";

export default class Violins extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      violins => violins.musicMaterial
    );
    console.log(instrumentArray);
    let violinArray = instrumentArray.filter(
      instrument => instrument === "violins"
    );

    console.log(violinArray);
    let number = violinArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img key={Math.random()} src={Violin} alt={"Violin"} height="120" />
      );
    }
    return (
      <div>
        {images}
        <h1 className="instrumentNumber">Donated Violins: {number}</h1>
      </div>
    );
  }
}
