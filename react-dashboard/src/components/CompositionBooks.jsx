import React, { Component } from "react";
import Book from "../Assets/book.jpg";

export default class CompositionBooks extends Component {
  render() {
    let images = [];

    let instrumentArray = this.props.materials.map(
      instruments => instruments.musicMaterial
    );
    //Filters all donated compositions in one array.
    let compositionArray = instrumentArray.filter(
      composition => composition === "compositions"
    );
    //Use the number of donated materials to create the same number of images.
    let number = compositionArray.length;
    for (let i = 0; i < number; i++) {
      images.push(
        <img
          key={Math.random()}
          src={Book}
          id="book"
          alt={"Composition Books"}
          height="80"
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
