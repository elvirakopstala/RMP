import React, { Component } from "react";
import "./ColorCard.style.scss";

export default class ColorCardComponent extends Component {
  render() {
    const { title, colorHex } = this.props;

    return (
      <div className="grid-element" style={{ backgroundColor: colorHex }}>
        <div className="wrapper">
        <div className="color">{colorHex}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    );
  }
}
