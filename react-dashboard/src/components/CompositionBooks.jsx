import React, { Component } from "react";
import Book from "../Assets/book.jpg";

export default class CompositionBooks extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      instruments => instruments.musicMaterial
    );

    let compositionArray = instrumentArray.filter(
      composition => composition === "compositions"
    );

    let number = compositionArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img
          key={Math.random()}
          src={Book}
          alt={"Composition Books"}
          height="100"
        />
      );
    }
    return (
      <div>
        {images}
        <h2 className="instrumentNumber">
          Donated Composition Books: {number}
        </h2>
      </div>
    );
  }
}
