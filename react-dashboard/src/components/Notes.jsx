import React, { Component } from "react";
import Notes from "../Assets/note.png";

export default class Donators extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={Notes} alt={"note signs"} />
      </React.Fragment>
    );
  }
}
