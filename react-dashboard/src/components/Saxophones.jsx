import React, { Component } from "react";
import Saxophone from "../saxophone.png";

class Saxophones extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      saxofones => saxofones.musicMaterial
    );
    console.log(instrumentArray);
    let saxofoneArray = instrumentArray.filter(
      instrument => instrument === "saxofone"
    );

    console.log(saxofoneArray);
    let number = saxofoneArray.length;
    for (let i = 0; i < number; i++) {
      images.push(<img key={Math.random()} src={Saxophone} alt={"saxofone"} />);
    }
    return (
      <div>
        {images}
        <h1 className="instrumentNumber">Donated Saxofone: {number}</h1>
      </div>
    );
  }
}
export default Saxophones;
