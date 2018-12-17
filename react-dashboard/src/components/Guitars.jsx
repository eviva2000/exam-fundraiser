import React, { Component } from "react";
import Guitar from "../Assets/guitar.png";

export default class Guitars extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      instrument => instrument.musicMaterial
    );

    let guitarArray = instrumentArray.filter(guitar => guitar === "guitar");

    let number = guitarArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img key={Math.random()} src={Guitar} alt={"Guitar"} height="100" />
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
