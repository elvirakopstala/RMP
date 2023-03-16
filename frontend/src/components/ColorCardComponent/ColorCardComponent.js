import React, { Component } from 'react';
import "../Body/BodyComponent.css"



export default class ColorCardComponent extends Component {
  render() {
    const {title, name, colorHex} = this.props;
    console.log(this.props);
    return (
      <div className="grid-element" style={{backgroundColor: colorHex}}>
        {title} - {name} - {colorHex}
      </div>
    )
  }
}




