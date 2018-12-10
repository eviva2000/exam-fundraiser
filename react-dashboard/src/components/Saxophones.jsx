import React, { Component } from "react";
import Saxophone from "../saxophone.png";

class Saxophones extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      saxofones => saxofones.musicMaterial
    );

    let saxofoneArray = instrumentArray.filter(
      instrument => instrument === "saxofone"
    );

    let number = saxofoneArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img
          key={Math.random()}
          src={Saxophone}
          alt={"saxofone"}
          height="120"
        />
      );
    }
    return (
      <div>
        {images}
        <h2 className="instrumentNumber">Donated Saxofones: {number}</h2>
      </div>
    );
  }
}
export default Saxophones;
