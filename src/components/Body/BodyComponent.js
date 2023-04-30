import React, { Component } from "react";
import "./BodyComponent.scss";
import ListColorComponent from "../ListColorComponent/ListColorComponent";

class BodyComponent extends Component {
  render() {
    return (
      <div className="main-part">
        <div className="background" />
        <div className="main-component">
          <div className="paint-grids">
            <ListColorComponent title="My colors" user={true} />
            <ListColorComponent title="Seasonal colors" />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyComponent;
