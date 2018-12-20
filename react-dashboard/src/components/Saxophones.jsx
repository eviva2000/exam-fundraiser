import React, { Component } from "react";
import Saxophone from "../Assets/saxophone.png";

class Saxophones extends Component {
  render() {
    let images = [];
    //Filters all donated materials in one array.
    let instrumentArray = this.props.materials.map(
      saxofones => saxofones.musicMaterial
    );

    let saxofoneArray = instrumentArray.filter(
      instrument => instrument === "saxofone"
    );
    //Use the number of donated materials to create the same number of images.
    let number = saxofoneArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img
          key={Math.random()}
          src={Saxophone}
          alt={"saxophone"}
          height="100"
        />
      );
    }

    return (
      <div id="saxophones">
        {images}
        <h2 className="instrumentNumber">Donated Saxofones: {number}</h2>
      </div>
    );
  }
}
export default Saxophones;
