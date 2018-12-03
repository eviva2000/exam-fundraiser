import React, { Component } from "react";
import Book from "../book.jpg";

export default class CompositionBooks extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      instruments => instruments.musicMaterial
    );
    console.log(instrumentArray);
    let compositionArray = instrumentArray.filter(
      composition => composition === "compositions"
    );

    console.log(compositionArray);
    let number = compositionArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img
          key={Math.random()}
          src={Book}
          alt={"Composition Books"}
          height="120"
        />
      );
    }
    return (
      <div>
        {images}
        <h1 className="instrumentNumber">
          Donated Composition Books: {number}
        </h1>
      </div>
    );
  }
}
