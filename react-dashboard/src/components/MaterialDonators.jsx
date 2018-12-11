import React, { Component } from "react";

//Gets properties from the parent Dashboard, maps through the array and returns a list of amounts and names.
export default class MaterialDonators extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.materials.map(item => (
          <li key={item.id}>
            <h2>{item.musicMaterial}</h2>
            <h2>{item.name}</h2>
            <p className="comments">{item.comment}</p>
            <p className="email">{item.email}</p>
            <p className="date">{item.date.toString().slice(0, 10)}</p>
          </li>
        ))}
      </React.Fragment>
    );
  }
}
