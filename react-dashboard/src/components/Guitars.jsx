import React, { Component } from "react";
import Guitar from "../guitar.png";

export default class Guitars extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      instrument => instrument.musicMaterial
    );
    console.log(instrumentArray);
    let guitarArray = instrumentArray.filter(guitar => guitar === "guitar");

    console.log(guitarArray);
    let number = guitarArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img key={Math.random()} src={Guitar} alt={"Guitar"} height="170" />
      );
    }
    return (
      <div>
        {images}
        <h2 className="instrumentNumber">Donated Guitars: {number}</h2>
      </div>
    );
  }
}
