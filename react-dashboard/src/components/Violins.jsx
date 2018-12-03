import React from "react";
import Violin from "../violin.png";

let Image = function statelessFunctionComponentClass() {
  let images = [];
  for (let i = 0; i < 5; i++) {
    images.push(<img src={Violin} alt={"Image of violin"} />);
  }
  return images;
};
export default Image;
